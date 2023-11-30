import type { Metadata } from 'next';
import './globals.css';
import type { ReactNode } from 'react';
import HeaderNav from '@/components/header-nav';
import Footer from '@/components/footer';

import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const poppins = Poppins({
  subsets: ['latin-ext', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} overflow-x-hidden overflow-y-auto relative h-screen w-screen`}>
        <HeaderNav />
        <div className='bg-slate-100/90  '>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
