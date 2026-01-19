import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Moinul Hasan | Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} font-body bg-background-dark text-text-main min-h-screen flex flex-col selection:bg-primary selection:text-white`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Aggressive scroll position reset
              (function() {
                // Prevent scroll restoration
                if (&apos;scrollRestoration&apos; in history) {
                  history.scrollRestoration = &apos;manual&apos;;
                }
                
                // Multiple scroll resets to handle different browser behaviors
                const resetScroll = () => {
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                };
                
                // Immediate reset
                resetScroll();
                
                // Reset on DOM ready
                if (document.readyState === &apos;loading&apos;) {
                  document.addEventListener(&apos;DOMContentLoaded&apos;, resetScroll);
                } else {
                  resetScroll();
                }
                
                // Reset after page load
                window.addEventListener(&apos;load&apos;, resetScroll);
                
                // Additional mobile-specific resets
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                  setTimeout(resetScroll, 0);
                  setTimeout(resetScroll, 10);
                  setTimeout(resetScroll, 50);
                }
              })();
            `,
          }}
        />
        <SmoothScrollProvider>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
