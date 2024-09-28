// src/components/Footer.js
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Mi Blog. Todos los derechos reservados.</p>
                <p>
                    <Link href="/privacy" className="hover:underline">Política de Privacidad</Link> | 
                    <Link href="/terms" className="hover:underline"> Términos de Servicio</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;