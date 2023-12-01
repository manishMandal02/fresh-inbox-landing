import type { Metadata } from 'next';
import './globals.css';
import type { ReactNode } from 'react';
import HeaderNav from '@/components/header-nav';
import Footer from '@/components/footer';

import { Poppins } from 'next/font/google';

const seoData = {
  url: 'https://freshinbox.xyz/',
  title: 'Clean Inbox, Total Privacy | FreshInbox',
  desc: 'Fresh Inbox is a Chrome extension to help you maintain a clutter-free Gmail inbox. it removes & blocks unwanted emails.',
  ogImage: 'https://freshinbox.xyz/images/og-image.png',
};

export const metadata: Metadata = {
  metadataBase: new URL(seoData.url),

  title: seoData.title,
  description: seoData.desc,
  keywords: 'inbox, gmail, chrome, extension, clean, privacy, security, manish, ',
  openGraph: {
    title: seoData.title,
    description: seoData.desc,
    images: {
      url: seoData.ogImage,
      width: 1650,
      height: 850,
      alt: seoData.title,
    },
  },
};

const poppins = Poppins({
  subsets: ['latin-ext', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} overflow-x-hidden overflow-y-auto relative h-screen w-screen`}>
        {/* seo */}
        <HeaderNav />
        <div className='bg-slate-100/90  '>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
