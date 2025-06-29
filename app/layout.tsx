import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

// FontAwesome configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fame Group - Premium Garment Manufacturing',
  description: 'Premium garment manufacturing and custom apparel solutions. High-quality textiles, innovative designs, and sustainable fashion.',
  keywords: ['garment manufacturing', 'custom apparel', 'fashion', 'textiles', 'clothing', 'sustainable fashion'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://famegroup.com',
    siteName: 'Fame Group',
    title: 'Fame Group - Premium Garment Manufacturing',
    description: 'Premium garment manufacturing and custom apparel solutions. High-quality textiles, innovative designs, and sustainable fashion.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fame Group - Premium Garment Manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fame Group - Premium Garment Manufacturing',
    description: 'Premium garment manufacturing and custom apparel solutions.',
    images: ['/og-image.jpg'],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fame Group",
              "url": "https://famegroup.com",
              "logo": "https://famegroup.com/logo.png",
              "description": "Premium garment manufacturing and custom apparel solutions",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD",
                "addressLocality": "Dhaka"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 (0) 800 123 4567",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}