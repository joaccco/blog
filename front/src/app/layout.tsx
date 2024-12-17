"use client";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { genos } from "@/config/fonts";
import Stars from "../components/Stars";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* useEffect(() => {
    if (typeof window !== 'undefined') {
      import('alpinejs').then((Alpine) => {
        window.Alpine = Alpine;
        Alpine.start(); // Inicia Alpine.js
      });
    }
  }, []); */

  return (
    <html lang="en">
      <body className={genos.className}>
        <Navbar />
        <div
          style={{
            backgroundColor: "black",
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            zIndex: "10",
          }}
        >
          <Stars />
        </div>
        <div className="z-50 h-screen absolute">
          {children}{" "}
        </div>
        <Footer />
      </body>
    </html>
  );
}
