// src/components/Layout.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/globals.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex-grow flex flex-col gap-8 items-center sm:items-start">
          {children} {/* Aquí es donde se renderizarán las páginas hijas */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;