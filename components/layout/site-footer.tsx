export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-3">BluGrid Systems</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Custom software, automation systems, and AI infrastructure engineered
              for businesses that demand performance, efficiency, and scale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white/80">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="/ai-assistant" className="hover:text-white">AI Assistant</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white/80">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/tools" className="hover:text-white">Tools</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Privacy Notice (Requested) */}
        <div
          className="text-white/50 text-center max-w-5xl mx-auto"
          style={{
            fontFamily: '"Segoe UI", Arial, sans-serif',
            fontSize: "8pt",
            lineHeight: "1.5",
          }}
        >
          <p>
            <span className="font-semibold">Privacy Notice:</span> BluGrid Systems (Pty) Ltd is
            committed to safeguarding your personal information in full compliance with the{" "}
            <span className="font-semibold">Protection of Personal Information Act (POPIA)</span> of
            South Africa and the{" "}
            <span className="font-semibold">
              European Union General Data Protection Regulation (GDPR)
            </span>
            . All data collected is processed lawfully, securely, and transparently, with strict
            safeguards to ensure confidentiality, integrity, and compliance with international
            standards.
          </p>

          <p className="mt-2">
            For any requests or further information, please contact our Information Officer at{" "}
            <a
              href="mailto:info@blugridsystems.com"
              className="text-cyan-300 underline"
              style={{
                fontFamily: '"Segoe UI", Arial, sans-serif',
                fontSize: "8pt",
              }}
            >
              info@blugridsystems.com
            </a>
          </p>
        </div>

        {/* Bottom */}
        <div className="text-center text-white/40 text-xs mt-6">
          © {new Date().getFullYear()} BluGrid Systems. All rights reserved.
        </div>

      </div>
    </footer>
  );
}