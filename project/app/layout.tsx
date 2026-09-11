import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jankalyangurukul.org'),
  title: 'Jan Kalyan Gurukul Seva Sanstha | Spiritual Wisdom, Katha & Gurukul',
  description:
    'Discover the spiritual journey, teachings, Kathas, Gurukul, seva activities and upcoming religious events of Jan Kalyan Gurukul Seva Sanstha.',
  keywords: [
    'Jan Kalyan Gurukul Seva Sanstha',
    'spiritual wisdom',
    'Katha',
    'Gurukul',
    'seva',
    'dharma',
    'Bhagwat Katha',
    'Shiv Puran',
    'Hindu saint',
  ],
  openGraph: {
    title: 'Jan Kalyan Gurukul Seva Sanstha | Spiritual Wisdom, Katha & Gurukul',
    description:
      'Discover the spiritual journey, teachings, Kathas, Gurukul, seva activities and upcoming religious events of Jan Kalyan Gurukul Seva Sanstha.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jan Kalyan Gurukul Seva Sanstha | Spiritual Wisdom, Katha & Gurukul',
    description:
      'Discover the spiritual journey, teachings, Kathas, Gurukul, seva activities and upcoming religious events of Jan Kalyan Gurukul Seva Sanstha.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
