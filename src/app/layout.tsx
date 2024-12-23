import type { Metadata } from 'next';
import { Cedarville_Cursive } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Cedarvillecursive = Cedarville_Cursive({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Nick & Karen',
  description: 'Engagement website for Nick and Karen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={Cedarvillecursive.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
