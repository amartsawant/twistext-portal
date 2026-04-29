import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twistext — Encrypted Messaging, Reimagined",
  description:
    "Twistext is a privacy-first messaging toolkit. Encrypt, hide, and share messages with end-to-end encryption. Fully offline. No servers. No accounts.",
  keywords: ["encrypted messaging", "private messaging", "steganography", "morse code", "AES-256", "secure chat"],
  openGraph: {
    title: "Twistext — Encrypted Messaging, Reimagined",
    description: "Privacy-first messaging toolkit. AES-256-GCM encryption, invisible steganography, and more. Fully offline.",
    url: "https://twistext.com",
    siteName: "Twistext",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#07070f] text-[#f0f0ff]">
        {children}
      </body>
    </html>
  );
}
