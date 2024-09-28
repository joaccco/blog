// src/pages/home.js

import Layout from '../app/page'; // Asegúrate de importar el layout correcto

const Home = () => {
  return (
    <Layout>
      {/* Este contenido se renderizará dentro del layout */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Contacto</h1>
        <p className="mt-4 text-lg">Si tienes alguna pregunta, no dudes en contactarme.</p>
        {/* Aquí podrías incluir un formulario de contacto */}
      </div>
    </Layout>
  );
};

export default Home;