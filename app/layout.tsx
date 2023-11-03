import { UserProvider } from '@/context';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AutoHunt',
  description: 'Website for buying car online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Autohunt</title>
      </head>
      <body className={`${inter.className} max-w-7xl mx-auto xl:w-[1280px]`}>
        <UserProvider>
          <main>
            <Navbar />
            {children}
          </main>
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
