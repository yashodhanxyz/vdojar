import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const title = "VDOJAR";
const description =
  "Discover premium indie films, documentaries, and shorts streaming for free on VDOJAR.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vdojar.com"),
  title: {
    default: `${title} – Indie Films On Demand`,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "indie films",
    "free streaming",
    "world cinema",
    "independent movies",
    "VDOJAR",
  ],
  authors: [{ name: "VDOJAR" }],
  openGraph: {
    title: `${title} – Stream Indie Films For Free`,
    description,
    url: "https://vdojar.com",
    siteName: title,
    images: [{
      url: "/media/hero/8-don-75.jpg",
      width: 1280,
      height: 720,
      alt: "VDOJAR hero artwork",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} – Stream Indie Films For Free`,
    description,
    images: ["/media/hero/8-don-75.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} bg-background text-foreground antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-50 focus:rounded-md focus:bg-background/90 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
