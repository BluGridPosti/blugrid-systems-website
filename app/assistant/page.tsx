"use client";

import { FormEvent, useState } from "react";
import SiteShell from "@/components/layout/site-shell";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const starterPrompts = [
  "What kind of systems does BluGrid build?",
  "Can BluGrid automate lead follow-up and WhatsApp?",
  "How do I know if my business needs a custom system?",
  "What would a system audit look like for my business?",
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Welcome to BluGrid Systems. Tell me what is slowing your business down, and I’ll help you figure out what kind of system, automation, or infrastructure would fit best.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(messageText: string) {
    const trimmed = messageText.trim();

    if (!trimmed || isLoading) {
      return;
    }

    setError("");
    setIsLoading(true);

    const nextUserMessage: ChatMessage = {
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [...current, nextUserMessage]);
    setInput("");

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      const data = (await response.json()) as {
        ok: boolean;
        reply?: string;
        error?: string;
      };

      if (!response.ok || !data.ok || !data.reply) {
        throw new Error(data.error || "Assistant request failed.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply as string,
        },
      ]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";

      setError(message);
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I hit a problem while trying to answer. Please try again, or use the contact page to request a system audit.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await sendMessage(input);
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            AI Assistant
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Talk To The BluGrid Systems Assistant
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            Ask about automation, operating systems, dashboards, AI assistants,
            custom software, or what kind of infrastructure your business may need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Suggested Prompts
              </div>

              <div className="mt-5 grid gap-3">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void sendMessage(prompt)}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-left text-sm text-white/80 transition hover:border-cyan-300/30 hover:text-white"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Best Use
              </div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                The assistant is most useful when you describe the actual
                bottleneck in your business, such as manual admin, weak lead
                follow-up, poor visibility, disconnected tools, or scaling pressure.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-6">
            <div className="flex h-[560px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                  BluGrid Assistant
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-5">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[85%] rounded-[1.5rem] px-4 py-4 text-sm leading-7 ${
                      message.role === "assistant"
                        ? "border border-white/10 bg-white/[0.04] text-white/80"
                        : "ml-auto border border-cyan-300/20 bg-cyan-300/10 text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                ))}

                {isLoading && (
                  <div className="max-w-[85%] rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/60">
                    Thinking...
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-t border-white/10 px-4 py-4 sm:px-5"
              >
                <div className="flex flex-col gap-3">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={4}
                    placeholder="Describe the problem inside your business..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                  />

                  {error ? (
                    <div className="text-sm text-red-400">{error}</div>
                  ) : null}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? "Sending..." : "Ask Assistant"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}