import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simular una acción de suscripción, como una API call.
      setMessage('Gracias por suscribirte!');
      setEmail('');
    } else {
      setMessage('Por favor, ingresa un correo válido.');
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Sobre nosotros</h3>
          <p className="text-sm">
            Somos una empresa dedicada a ofrecer productos de alta calidad con un
            enfoque en la sostenibilidad y el impacto social.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-sm hover:text-gray-300">Sobre nosotros</a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:text-gray-300">Contacto</a>
            </li>
            <li>
              <a href="/privacy" className="text-sm hover:text-gray-300">Política de privacidad</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Suscríbete a nuestro boletín</h3>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Suscribirse
            </button>
          </form>
          {message && <p className="mt-2 text-sm text-green-400">{message}</p>}
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Ethereal Devs. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
