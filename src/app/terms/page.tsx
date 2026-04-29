import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions — Twistext",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: April 29, 2026</p>

        {/* Summary callout */}
        <div className="border border-[#6366f1]/40 rounded-xl p-5 mb-10 bg-[#6366f1]/8">
          <p className="text-white/80 text-sm leading-relaxed">
            By using Twistext, you agree to these Terms &amp; Conditions. Please read them carefully.
            Twistext is a local-only, end-to-end encrypted messaging tool — we do not operate message
            servers or store your data.
          </p>
        </div>

        <Section num="1" title="Acceptance of Terms">
          <p className="text-white/60 text-sm leading-relaxed">
            By downloading, installing, or using the Twistext application, you agree to be bound by these
            Terms &amp; Conditions and our Privacy Policy. If you do not agree, do not use the app.
            These terms apply to all users of the Twistext mobile application.
          </p>
        </Section>

        <Section num="2" title="Use of the Application">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Twistext grants you a limited, non-exclusive, non-transferable, revocable license to use the
            app for personal, lawful purposes. You agree not to:
          </p>
          <ul className="text-white/60 text-sm space-y-2 list-none">
            {[
              "Use the app for any unlawful, harmful, or fraudulent purpose",
              "Attempt to reverse-engineer, decompile, or modify the app",
              "Use the app to harass, threaten, or harm others",
              "Attempt to circumvent encryption features for malicious purposes",
              "Use the app in violation of any applicable laws or regulations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section num="3" title="User Responsibility">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Because Twistext operates entirely on your device without servers:
          </p>
          <ul className="text-white/60 text-sm space-y-2 list-none">
            {[
              "You are solely responsible for the content of messages you send using Twistext",
              "You are responsible for safeguarding your passcode and backup codes",
              "You are responsible for who you pair with and share encrypted content with",
              "Lost passcodes or backup codes cannot be recovered — Twistext has no server-side access",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section num="4" title="Subscriptions &amp; Payments">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Twistext offers Free and Premium subscription tiers:
          </p>
          <ul className="text-white/60 text-sm space-y-2.5 list-none mb-4">
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Premium Monthly / Annual:</strong> Unlocks unlimited contacts, all transformation modes, steganography features, custom themes, and watermark removal</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Billing:</strong> All payments are processed by Apple App Store or Google Play Store. Twistext does not directly handle payment information.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Auto-renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Cancellation:</strong> You may cancel at any time through your App Store or Google Play account settings.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Refunds:</strong> Refund requests are handled by Apple or Google according to their respective refund policies.</span></li>
          </ul>
        </Section>

        <Section num="5" title="Intellectual Property">
          <p className="text-white/60 text-sm leading-relaxed">
            The Twistext name, logo, app design, and all related intellectual property are owned by
            Twistext and protected by applicable copyright and trademark laws. You may not reproduce,
            distribute, or create derivative works without express written permission. All encryption
            algorithms used are based on open industry standards (ECDH, AES-256-GCM).
          </p>
        </Section>

        <Section num="6" title="Disclaimer of Warranties">
          <p className="text-white/60 text-sm leading-relaxed">
            Twistext is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not
            warrant that the app will be error-free, uninterrupted, or meet your specific requirements.
            While we design Twistext with strong cryptographic standards, no system can guarantee
            absolute security in all circumstances.
          </p>
        </Section>

        <Section num="7" title="Limitation of Liability">
          <p className="text-white/60 text-sm leading-relaxed">
            To the fullest extent permitted by law, Twistext and its developers shall not be liable for
            any indirect, incidental, special, or consequential damages arising from your use of the app,
            including but not limited to loss of data, loss of passcodes, or inability to decrypt
            messages. Because Twistext operates without servers, we cannot recover data on your behalf.
          </p>
        </Section>

        <Section num="8" title="Privacy">
          <p className="text-white/60 text-sm leading-relaxed">
            Your use of Twistext is also governed by our{" "}
            <a href="/privacy" className="text-[#6366f1] hover:underline">Privacy Policy</a>,
            which is incorporated by reference into these Terms. Twistext is built on a
            server-free, local-first architecture — we do not store your messages, keys, or identity on any servers.
          </p>
        </Section>

        <Section num="9" title="Termination">
          <p className="text-white/60 text-sm leading-relaxed">
            You may stop using Twistext at any time by uninstalling the app. We reserve the right to
            discontinue the app or any feature at any time. Upon uninstallation, all locally stored data
            is removed from your device. Twistext has no server-side data to delete on your behalf.
          </p>
        </Section>

        <Section num="10" title="Changes to These Terms">
          <p className="text-white/60 text-sm leading-relaxed">
            We may update these Terms &amp; Conditions from time to time. We will notify users of
            significant changes through app updates or in-app notices. Continued use of the app after
            changes constitutes acceptance of the revised terms. The &ldquo;Last updated&rdquo; date at the top
            indicates when these terms were last revised.
          </p>
        </Section>

        <Section num="11" title="Governing Law">
          <p className="text-white/60 text-sm leading-relaxed">
            These Terms &amp; Conditions shall be governed by and construed in accordance with applicable
            laws. Any disputes arising from these terms or your use of Twistext shall be subject to the
            exclusive jurisdiction of the applicable courts.
          </p>
        </Section>

        <Section num="12" title="Contact Us">
          <p className="text-white/60 text-sm leading-relaxed mb-3">
            If you have any questions about these Terms &amp; Conditions, please contact us at:
          </p>
          <a href="mailto:support@twistext.com" className="text-[#6366f1] text-sm hover:underline">
            support@twistext.com
          </a>
        </Section>

        <div className="border-t border-white/8 mt-12 pt-6">
          <p className="text-center text-sm text-white/30">© 2026 Twistext. All rights reserved.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{num}. {title}</h2>
      {children}
    </div>
  );
}
