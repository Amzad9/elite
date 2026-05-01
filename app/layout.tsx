import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import "./globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maryland Merchant Services",
  description: "Merchant Services & Credit Card Processing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          id="chatbot-project-iframe"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  var IFRAME_SRC = 'https://chatbot-project-nu-three.vercel.app/embed';

  window.addEventListener('message', function(e) {
    var iframe = document.getElementById('eli-chatbot-iframe') ||
      document.querySelector('iframe[src*="chatbot-project"]');
    if (!iframe || e.data == null) return;
    var d = e.data;
    if (typeof d === 'string') {
      try { d = JSON.parse(d); } catch (_) { return; }
    }
    if (!d || d.type !== 'resize') return;
    if (typeof d.height === 'number') iframe.style.height = d.height + 'px';
    if (typeof d.width === 'number') iframe.style.width = d.width + 'px';
  });

  document.querySelectorAll('iframe[src*="chatbot-project"]').forEach(function(n) {
    try { n.remove(); } catch (_) {}
  });

  var iframe = document.createElement('iframe');
  iframe.id = 'eli-chatbot-iframe';
  iframe.src = IFRAME_SRC;
  iframe.style.cssText = [
    'position:fixed',
    'bottom:0',
    'right:0',
    'width:400px',
    'height:600px',
    'border:none',
    'z-index:9999',
    'background:transparent'
  ].join(';');
  iframe.allow = 'microphone';
  document.body.appendChild(iframe);
})();`,
          }}
        />
      </body>
    </html>
  );
}
