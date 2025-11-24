import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: 'Premium IT Services & Consulting',
    template: '%s | Premium IT Services',
  },
  description: 'Leading IT consulting and digital transformation partner. We help businesses innovate and grow with cutting-edge technology solutions.',
  keywords: ['IT Services', 'Consulting', 'Digital Transformation', 'Cloud Migration', 'Cybersecurity', 'Software Development'],
  authors: [{ name: 'Premium IT Services' }],
  creator: 'Premium IT Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.premiumit.com',
    siteName: 'Premium IT Services',
    title: 'Premium IT Services & Consulting',
    description: 'Leading IT consulting and digital transformation partner.',
    images: [
      {
        url: 'https://www.premiumit.com/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Premium IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium IT Services & Consulting',
    description: 'Leading IT consulting and digital transformation partner.',
    images: ['https://www.premiumit.com/og-image.jpg'], // Placeholder
    creator: '@premiumit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
