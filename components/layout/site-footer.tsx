"use client";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800 bg-black/40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              BluGrid Systems
            </h3>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Custom software, automation systems, and AI infrastructure engineered
              for businesses that demand performance, efficiency, and scale.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 text-sm text-neutral-400">
            <div className="flex flex-col gap-2">
              <span className="text-white font-medium mb-2">Navigation</span>
              <a href="/" className="hover:text-white transition">Home</a>
              <a href="/services" className="hover:text-white transition">Services</a>
              <a href="/portfolio" className="hover:text-white transition">Portfolio</a>
              <a href="/assistant" className="hover:text-white transition">AI Assistant</a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white font-medium mb-2">Company</span>
              <a href="/about" className="hover:text-white transition">About</a>
              <a href="/contact" className="hover:text-white transition">Contact</a>
              <a href="/tools" className="hover:text-white transition">Tools</a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-10" />

        {/* Disclaimer */}
        <p className="text-xs text-neutral-500 leading-relaxed text-center max-w-4xl mx-auto">
          Disclaimer & POPIA Notice: This email and any attachments are intended for the recipient only. 
          If you’ve received it by mistake, please notify us and delete it immediately; any unauthorised 
          use or disclosure is prohibited. Any personal information shared here is handled in line with 
          the Protection of Personal Information Act (POPIA). Please ensure you also process this information 
          only for its intended purpose and keep it confidential. BluGrid Systems employees are required 
          to comply with all relevant legislation, including the ECTA and POPIA; any breach of these laws 
          or internal communication policies is deemed a breach of company policy and subject to disciplinary action.
        </p>

        {/* Bottom Bar */}
        <div className="mt-10 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} BluGrid Systems. All rights reserved.
        </div>

      </div>
    </footer>
  );
}