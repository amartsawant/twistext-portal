import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-white/6">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            Twistext
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <a href="mailto:support@twistext.com" className="text-sm text-white/50 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-white/30">© 2026 Twistext</p>
      </div>
    </footer>
  );
}
