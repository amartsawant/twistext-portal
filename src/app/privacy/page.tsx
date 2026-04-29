import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Twistext",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: April 29, 2026</p>

        {/* Summary callout */}
        <div className="border border-[#6366f1]/40 rounded-xl p-5 mb-10 bg-[#6366f1]/8">
          <p className="text-white/80 text-sm leading-relaxed">
            Twistext is built with privacy and security at its core. Your messages, encryption keys,
            and identity exist only on your device. We do not operate servers that store, process, or
            transmit your messages.
          </p>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-10">
          This Privacy Policy explains how Twistext handles data when you use our end-to-end encrypted
          messaging application.
        </p>

        <Section num="1" title="Information We Collect">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            <strong className="text-white">We do NOT collect, transmit, or store:</strong>
          </p>
          <ul className="text-white/60 text-sm space-y-2 list-none mb-4">
            {[
              "Your encrypted messages or message content",
              "Your username or identity information",
              "Your private encryption keys",
              "Your paired contacts list",
              "Your passcode or biometric data",
              "Morse code, steganography, or transformed text content",
              "QR codes or pairing data",
              "Backup codes or encrypted backup data",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-white/60 text-sm leading-relaxed">
            Twistext does not use analytics or telemetry beyond standard App Store and Google Play Store
            reporting, which is managed by Apple and Google respectively.
          </p>
        </Section>

        <Section num="2" title="How Your Data is Stored">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            All Twistext data is stored locally on your device using encrypted storage (MMKV):
          </p>
          <ul className="text-white/60 text-sm space-y-2.5 list-none mb-4">
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Username:</strong> Stored only on your device, never transmitted to any server</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Encryption keys:</strong> Generated and stored in your device's secure enclave (iOS Keychain / Android Keystore)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Paired contacts:</strong> Stored locally; only you have access to this list</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Settings and preferences:</strong> Stored locally on your device</span></li>
          </ul>
          <p className="text-[#22c55e] text-sm font-medium">
            There is no Twistext account server. Your identity exists only on your device.
          </p>
        </Section>

        <Section num="3" title="Encryption &amp; Message Processing">
          <div className="border border-[#6366f1]/30 rounded-xl p-5 mb-4 bg-[#6366f1]/6">
            <p className="text-white/80 text-sm font-medium mb-3">End-to-end encryption happens entirely on your device:</p>
            <ul className="text-white/60 text-sm space-y-2 list-none">
              {[
                "Encryption uses ECDH key exchange and AES-256-GCM encryption",
                "All cryptographic operations run natively (Swift/Objective-C on iOS, native modules on Android)",
                "Your private keys never leave your device and are stored in the OS secure enclave",
                "Messages are encrypted locally and shared as encrypted text via channels you choose (WhatsApp, email, etc.)",
                "Twistext does not operate servers that process, store, or transmit your messages",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  {i === 2 ? <span>Your private keys <strong className="text-white">never leave your device</strong> and are stored in the OS secure enclave</span> : item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            All message transformations (Morse code, invisible steganography, text reversal/flipping,
            Matrix-style encoding) happen locally on your device in real-time.
          </p>
        </Section>

        <Section num="4" title="Sharing &amp; Transmission">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Twistext generates encrypted messages (or transformed text) that you can share through any
            communication channel you choose — WhatsApp, email, SMS, social media, etc.
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            <strong className="text-white">Important:</strong> When you share encrypted messages or content through third-party platforms,
            those platforms' privacy policies apply. Twistext does not transmit, route, or store your
            messages. We do not control what happens to content after you share it.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Messages may include an optional share watermark ("✨ Twistext") which can be toggled off by
            Premium subscribers.
          </p>
        </Section>

        <Section num="5" title="QR Code Pairing">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            To securely pair with contacts, Twistext uses a QR code exchange system:
          </p>
          <ul className="text-white/60 text-sm space-y-2 list-none">
            {[
              "You can display your pairing QR code or scan another user's QR code",
              "Camera access is used only for scanning QR codes during the pairing process",
              "Paired contact data is stored locally on your device only",
              "No pairing information is transmitted to Twistext servers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section num="6" title="Device Permissions">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Twistext requests the following device permissions:
          </p>
          <ul className="text-white/60 text-sm space-y-3 list-none mb-4">
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Camera:</strong> Used only for scanning QR codes during contact pairing. No photos or videos are captured or stored.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Photo Library:</strong> Used only when you explicitly choose to decode hidden steganographic data from an image. Access is limited to images you select.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">Face ID / Touch ID (Biometric Authentication):</strong> Optional. Used to unlock the app if you enable biometric authentication in Settings. Biometric data is handled entirely by your device's operating system — Twistext never stores or accesses your biometric information.</span></li>
          </ul>
          <p className="text-white/60 text-sm leading-relaxed">
            Twistext does not use your microphone, location, contacts list, or any other sensitive permissions.
          </p>
        </Section>

        <Section num="7" title="Passcode &amp; Authentication">
          <p className="text-white/60 text-sm leading-relaxed">
            During onboarding, you set a numeric passcode to protect your app. This passcode is stored
            securely on your device and is never transmitted to any server. Biometric authentication (Face
            ID/Touch ID) is optional and managed entirely by your device's operating system.
          </p>
        </Section>

        <Section num="8" title="Backup &amp; Restore (Premium Only)">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Premium subscribers can create encrypted account backups that include:
          </p>
          <ul className="text-white/60 text-sm space-y-2 list-none mb-4">
            {["Your encryption keys", "Paired contacts list", "App settings"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-white/60 text-sm leading-relaxed">
            Backup codes are generated and encrypted locally on your device. You are responsible for
            storing your backup code securely. Twistext does not store or have access to your backup codes.
          </p>
        </Section>

        <Section num="9" title="Subscriptions &amp; Payments">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Twistext offers Free and Premium subscription plans (monthly or annual):
          </p>
          <ul className="text-white/60 text-sm space-y-2 list-none">
            {[
              "All in-app purchases are processed by Apple App Store or Google Play Store",
              "Subscription management is handled by RevenueCat",
              "Twistext does not store or process your payment details",
              "Payments are processed securely by Apple and Google",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section num="10" title="Third-Party Services">
          <p className="text-white/60 text-sm leading-relaxed mb-4">Twistext integrates with:</p>
          <ul className="text-white/60 text-sm space-y-2 list-none mb-4">
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">RevenueCat:</strong> For subscription management and in-app purchase processing</span></li>
            <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" /><span><strong className="text-white">App Store / Google Play:</strong> Standard analytics and crash reporting provided by Apple and Google</span></li>
          </ul>
          <p className="text-white/60 text-sm leading-relaxed">
            Twistext does not use third-party analytics, tracking, or advertising services. We do not share
            your messages, identity, or usage patterns with third parties.
          </p>
        </Section>

        <Section num="11" title="Data Security">
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Twistext is designed with security and privacy as foundational principles:
          </p>
          <ul className="text-white/60 text-sm space-y-2 list-none">
            {[
              "All encryption and decryption happens locally on your device using native cryptographic modules",
              "Private keys are stored in your device's secure enclave (Keychain on iOS, Keystore on Android)",
              "Local data is encrypted using MMKV encrypted storage",
              "By operating without servers, we eliminate the risk of server-side data breaches",
              "Your messages, keys, and identity never leave your device unless you explicitly share encrypted content",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section num="12" title="Children's Privacy">
          <p className="text-white/60 text-sm leading-relaxed">
            Twistext is not intended for children under the age of 13. Because we do not collect or store
            user data on servers, we do not knowingly collect personal information from anyone, including
            children. If you are a parent or guardian with concerns, please contact us at the email below.
          </p>
        </Section>

        <Section num="13" title="Changes to This Policy">
          <p className="text-white/60 text-sm leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            features, or legal requirements. We encourage you to review this page periodically. The &ldquo;Last
            updated&rdquo; date at the top indicates when this policy was last revised.
          </p>
        </Section>

        <Section num="14" title="Contact Us">
          <p className="text-white/60 text-sm leading-relaxed mb-3">
            If you have any questions or concerns about this Privacy Policy or how Twistext handles data,
            please contact us at:
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
