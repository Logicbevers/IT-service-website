import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: 'NRT Groups - Building the Future of Business & Innovation',
    template: '%s | NRT Groups',
  },
  description: 'Empowering organizations with integrated solutions in technology, logistics, digital transformation, and skill development. 500+ projects delivered, 50+ global clients, 15+ years of excellence.',
  keywords: ['IT Services', 'Logistics', 'Digital Transformation', 'Software Development', 'Training', 'Enterprise Solutions', 'Supply Chain', 'Customer Experience'],
  authors: [{ name: 'NRT Groups' }],
  creator: 'NRT Groups',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nrtgroups.com',
    siteName: 'NRT Groups',
    title: 'NRT Groups - Building the Future of Business & Innovation',
    description: 'Empowering organizations with integrated solutions in technology, logistics, digital transformation, and skill development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NRT Groups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRT Groups - Building the Future of Business & Innovation',
    description: 'Empowering organizations with integrated solutions in technology, logistics, digital transformation, and skill development.',
    images: ['/og-image.jpg'],
    creator: '@nrtgroups',
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
          <ErrorBoundary>
            <main className="min-h-screen pt-20">
              {children}
            </main>
          </ErrorBoundary>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
