"use client";
import "../styles/globals.css";
import { genos } from "@/config/fonts";
import Stars from "../components/Stars";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={genos.className}>
        {/* Fondo con Stars */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: "black",
            overflow: "hidden",
          }}
        >
          <Stars />
        </div>

        {/* Contenido principal centrado */}
        <main className="flex items-center justify-center relative z-10 min-h-screen">
          <div className="w-full max-w-md bg-black bg-opacity-70 p-6 rounded-lg shadow-md text-white">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
