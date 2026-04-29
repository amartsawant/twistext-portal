import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransformDemo from "@/components/TransformDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
            Turn simple messages into{" "}
            <span style={{ background: "linear-gradient(90deg, #6366f1, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              something fun
            </span>
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-10 leading-relaxed">
            Create Morse code, flipped text, and playful messages you can share anywhere.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#6366f1] hover:bg-[#5558e3] hover:scale-[1.03] text-white text-base font-semibold transition-all duration-200 shadow-[0_0_0_1px_rgba(99,102,241,0.5),0_0_28px_rgba(99,102,241,0.45)] hover:shadow-[0_0_0_1px_rgba(99,102,241,0.7),0_0_40px_rgba(99,102,241,0.6)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#22c55e] hover:bg-[#16a34a] hover:scale-[1.03] text-white text-base font-semibold transition-all duration-200 shadow-[0_0_0_1px_rgba(34,197,94,0.5),0_0_28px_rgba(34,197,94,0.4)] hover:shadow-[0_0_0_1px_rgba(34,197,94,0.7),0_0_40px_rgba(34,197,94,0.55)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2.17 2.17 0 0 1-.87-.71 2.2 2.2 0 0 1-.37-1.3V2.25a2.2 2.2 0 0 1 .37-1.3 2.17 2.17 0 0 1 .87-.71L13.5 12 3.18 23.76zm13.69-7.73-2.4-1.4-1.22 1.22 2.19 2.46 1.43-.83zm1.9-1.1L16.8 13l1.97-1.97 2 1.17a1.14 1.14 0 0 1 .56.96 1.11 1.11 0 0 1-.56.77zm-4.3-2.5L5.15 5.57l9.32 9.31 1.22-1.22-1.22-1.23z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <TransformDemo />

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#1a3a2a] flex items-center justify-center mb-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Morse Messages</h3>
            <p className="text-white/50 text-sm leading-relaxed">Turn your text into dots, dashes, and sound</p>
          </div>
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#1e1a3a] flex items-center justify-center mb-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M7 16V4m0 0L3 8m4-4 4 4" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8v12m0 0 4-4m-4 4-4-4" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Flip &amp; Twist</h3>
            <p className="text-white/50 text-sm leading-relaxed">Reverse and transform text in creative ways</p>
          </div>
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#1a3a2a] flex items-center justify-center mb-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="18" cy="5" r="3" stroke="#22c55e" strokeWidth="1.8"/>
                <circle cx="6" cy="12" r="3" stroke="#22c55e" strokeWidth="1.8"/>
                <circle cx="18" cy="19" r="3" stroke="#22c55e" strokeWidth="1.8"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#22c55e" strokeWidth="1.8"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#22c55e" strokeWidth="1.8"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Share Anywhere</h3>
            <p className="text-white/50 text-sm leading-relaxed">Works on WhatsApp, Instagram, and more</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 relative gap-10 sm:gap-0">
            {/* Connector lines */}
            <div className="absolute top-8 left-[38%] right-[38%] h-px bg-white/15 hidden sm:block" />

            <div className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-[#6366f1] flex items-center justify-center mb-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 20h9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-3xl font-bold text-[#6366f1] mb-3">1</p>
              <p className="text-sm text-white/60">Type your message</p>
            </div>

            <div className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-[#6366f1] flex items-center justify-center mb-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8"/>
                  <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-3xl font-bold text-[#6366f1] mb-3">2</p>
              <p className="text-sm text-white/60">Choose a style</p>
            </div>

            <div className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-[#6366f1] flex items-center justify-center mb-4">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <circle cx="18" cy="5" r="3" stroke="white" strokeWidth="1.8"/>
                  <circle cx="6" cy="12" r="3" stroke="white" strokeWidth="1.8"/>
                  <circle cx="18" cy="19" r="3" stroke="white" strokeWidth="1.8"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="white" strokeWidth="1.8"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="white" strokeWidth="1.8"/>
                </svg>
              </div>
              <p className="text-3xl font-bold text-[#6366f1] mb-3">3</p>
              <p className="text-sm text-white/60">Share with friends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Works instantly */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Works instantly on your device</h2>
          <p className="text-white/50 mb-10 md:mb-14">No setup, no friction — just open and start creating</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="py-6 px-4 rounded-2xl bg-white/3 border border-white/6">
              <p className="text-2xl md:text-3xl font-bold text-[#6366f1] mb-2">No accounts</p>
              <p className="text-sm text-white/50">Start using instantly — no signup needed</p>
            </div>
            <div className="py-6 px-4 rounded-2xl bg-white/3 border border-white/6">
              <p className="text-2xl md:text-3xl font-bold text-[#22c55e] mb-2">Fully local</p>
              <p className="text-sm text-white/50">Everything happens on your device</p>
            </div>
            <div className="py-6 px-4 rounded-2xl bg-white/3 border border-white/6">
              <p className="text-2xl md:text-3xl font-bold text-[#6366f1] mb-2">Fast &amp; simple</p>
              <p className="text-sm text-white/50">Create and share messages in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10">Start sending fun messages today</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#6366f1] hover:bg-[#5558e3] hover:scale-[1.03] text-white text-base font-semibold transition-all duration-200 shadow-[0_0_0_1px_rgba(99,102,241,0.5),0_0_28px_rgba(99,102,241,0.45)] hover:shadow-[0_0_0_1px_rgba(99,102,241,0.7),0_0_40px_rgba(99,102,241,0.6)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#22c55e] hover:bg-[#16a34a] hover:scale-[1.03] text-white text-base font-semibold transition-all duration-200 shadow-[0_0_0_1px_rgba(34,197,94,0.5),0_0_28px_rgba(34,197,94,0.4)] hover:shadow-[0_0_0_1px_rgba(34,197,94,0.7),0_0_40px_rgba(34,197,94,0.55)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2.17 2.17 0 0 1-.87-.71 2.2 2.2 0 0 1-.37-1.3V2.25a2.2 2.2 0 0 1 .37-1.3 2.17 2.17 0 0 1 .87-.71L13.5 12 3.18 23.76zm13.69-7.73-2.4-1.4-1.22 1.22 2.19 2.46 1.43-.83zm1.9-1.1L16.8 13l1.97-1.97 2 1.17a1.14 1.14 0 0 1 .56.96 1.11 1.11 0 0 1-.56.77zm-4.3-2.5L5.15 5.57l9.32 9.31 1.22-1.22-1.22-1.23z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
