import { Genos, Poppins } from "next/font/google";

// Importamos ambas fuentes
export const genos = Genos({ subsets: ["vietnamese"] });
export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] }); // Opcional: define los pesos necesarios