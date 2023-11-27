import type { Metadata } from 'next';
import './globals.css';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className={''}>{children}</body>
    </html>
  );
}
