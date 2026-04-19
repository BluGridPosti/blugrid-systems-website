"use client";

import { useEffect, useMemo, useState } from "react";

type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const STORAGE_KEY = "blugrid-cookie-consent-v1";

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);

    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setIsOpen(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved) as CookiePreferences;
      setPreferences({
        essential: true,
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
        functional: Boolean(parsed.functional),
      });
      setIsOpen(false);
    } catch {
      setIsOpen(true);
    }
  }, []);

  const hasOptionalCookiesEnabled = useMemo(() => {
    return (
      preferences.analytics || preferences.marketing || preferences.functional
    );
  }, [preferences]);

  function savePreferences(next: CookiePreferences) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setPreferences(next);
    setIsOpen(false);
  }

  function handleAcceptAll() {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  }

  function handleRejectNonEssential() {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  }

  function handleSaveCustom() {
    savePreferences(preferences);
  }

  function togglePreference(key: "analytics" | "marketing" | "functional") {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));
  }

  if (!mounted || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[100] px-4 sm:bottom-6 sm:px-6">
      <div
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-cyan-300/25 bg-[#08111f]/95 text-white shadow-[0_0_60px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        style={{ fontFamily: '"Segoe UI", Arial, sans-serif' }}
      >
        <div className="border-b border-white/10 px-6 py-5 sm:px-8">
          <div className="text-center">
            <div className="text-[26px] font-black uppercase tracking-[0.04em] text-white">
              Cookie Consent
            </div>
            <div className="mt-2 text-[18px] font-semibold text-white/90">
              We Value Your Privacy
            </div>
          </div>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-white/80">
            <p>
              <span className="font-semibold text-white">
                BluGrid Systems (Pty) Ltd
              </span>{" "}
              uses cookies to improve your experience and ensure compliance with
              the{" "}
              <span className="font-semibold text-white">
                Protection of Personal Information Act (POPIA)
              </span>{" "}
              and the{" "}
              <span className="font-semibold text-white">
                General Data Protection Regulation (GDPR)
              </span>
              .
            </p>

            <p>
              Some cookies are essential for site security and functionality,
              while others may collect{" "}
              <span className="font-semibold text-white">personal data</span>{" "}
              such as IP addresses for analytics, marketing, and preference
              storage.
            </p>
          </div>
        </div>

        <div className="px-6 py-5 sm:px-8">
          <div className="mb-4 border-b border-cyan-300/30 pb-3 text-[18px] font-bold text-white">
            Manage Cookie Preferences
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <CookieRow
              title="Essential Cookies (Always Active)"
              description="Required for security and core site functions."
              checked
              disabled
              onChange={() => undefined}
            />

            <CookieRow
              title="Analytics Cookies (Optional)"
              description="Collect anonymous usage data to improve performance."
              checked={preferences.analytics}
              onChange={() => togglePreference("analytics")}
            />

            <CookieRow
              title="Marketing Cookies (Optional)"
              description="Deliver relevant content and ads, and measure effectiveness."
              checked={preferences.marketing}
              onChange={() => togglePreference("marketing")}
            />

            <CookieRow
              title="Functional Cookies (Optional)"
              description="Remember your preferences such as language or region."
              checked={preferences.functional}
              onChange={() => togglePreference("functional")}
            />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="rounded-xl border border-cyan-300 bg-cyan-300 px-5 py-4 text-center text-[15px] font-bold text-black transition hover:opacity-95"
            >
              Accept All
              <div className="mt-1 text-[12px] font-medium text-black/75">
                You consent to all cookies
              </div>
            </button>

            <button
              type="button"
              onClick={handleSaveCustom}
              className="rounded-xl border border-white/15 bg-white/[0.05] px-5 py-4 text-center text-[15px] font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              Save Preferences
              <div className="mt-1 text-[12px] font-medium text-white/60">
                Save selected cookie preferences
              </div>
            </button>

            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="rounded-xl border border-white/15 bg-white/[0.05] px-5 py-4 text-center text-[15px] font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              Reject Non-Essential
              <div className="mt-1 text-[12px] font-medium text-white/60">
                Continue with only necessary cookies
              </div>
            </button>
          </div>

          <div className="mt-4 grid gap-2 text-center text-[13px] font-semibold sm:grid-cols-3">
            <a
              href="/popia-paia-manual"
              className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-cyan-300 underline underline-offset-2 transition hover:bg-white/[0.06]"
            >
              POPIA &amp; PAIA Manual
            </a>

            <a
              href="/privacy-policy"
              className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-cyan-300 underline underline-offset-2 transition hover:bg-white/[0.06]"
            >
              Privacy Policy (GDPR)
            </a>

            <a
              href="/cookie-policy"
              className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-cyan-300 underline underline-offset-2 transition hover:bg-white/[0.06]"
            >
              Cookie Policy
            </a>
          </div>

          <div className="mt-4 text-center text-[12px] text-white/45">
            {hasOptionalCookiesEnabled
              ? "Optional cookies are currently enabled in your selected preferences."
              : "Only essential cookies will be used unless you choose otherwise."}
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] border-b border-white/10 last:border-b-0">
      <div className="px-5 py-4">
        <div className="text-[15px] font-bold text-white">{title}</div>
        <div className="mt-1 text-[14px] leading-6 text-white/60">
          {description}
        </div>
      </div>

      <div className="flex items-center border-l border-white/10 px-5">
        <button
          type="button"
          onClick={onChange}
          disabled={disabled}
          aria-pressed={checked}
          className={`relative h-8 w-16 rounded-full border transition ${
            checked
              ? "border-cyan-300 bg-cyan-400"
              : "border-white/20 bg-white/20"
          } ${disabled ? "cursor-not-allowed opacity-90" : "cursor-pointer"}`}
        >
          <span
            className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
              checked ? "left-9" : "left-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}