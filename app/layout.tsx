import { UserProvider } from "@/context/UserContext";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoHunt",
  description: "Website for buying car online",
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
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <UserProvider>
          <main>
            <header>
              <nav>
                <Navbar />
              </nav>
            </header>
            {children}
          </main>
        </UserProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
