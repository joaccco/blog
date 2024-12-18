import Link from "next/link";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div
        className="hidden absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 animate-wave"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>

      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu animate-wave"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>

      {/* Sección 1 */}
      <section className="relative flex flex-col h-screen items-center justify-center snap-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/path-to-earth-image.jpg")',
            filter: "brightness(0.4)",
          }}
        ></div>
        <main className="relative z-10 flex flex-col items-center gap-8 text-center text-white">
          <h1 className="text-6xl font-bold">We Are Ethereal Devs</h1>
          <p className="text-2xl font-semibold">
            Web Solutions and Web Applications
          </p>
          <Link href="../app/login">
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">
              Iniciar Sesión
            </button>
          </Link>
          <Link href="/form">
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">
              Start
            </button>
          </Link>
        </main>
      </section>

      {/* Sección 2 */}
      <section className="relative bg-transparent flex flex-col h-screen items-center justify-center snap-center bg-black">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/path-to-space-image.jpg")',
            filter: "brightness(0.4)",
          }}
        ></div>
        <main className="relative z-10 text-center text-white p-6 w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-5xl font-bold mb-6">¿Qué Ofrecemos?</h2>

          {/* Cuadro con blur dinámico */}
          <div className="backdrop-blur-lg bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl">
            {/* Barra de navegación superior */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              <span className="cursor-pointer hover:text-gray-300">Diseño UX/UI</span>
              <span className="cursor-pointer hover:text-gray-300">Desarrollo a Medida</span>
              <span className="cursor-pointer hover:text-gray-300">Lógica de Negocio</span>
              <span className="cursor-pointer hover:text-gray-300">LandingPage</span>
              <span className="cursor-pointer hover:text-gray-300">Ecommerce</span>
            </div>

            {/* Contenido principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Texto y lista */}
              <div className="text-left">
                <p className="text-lg leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <ul className="list-disc ml-5">
                  <li>kdjwidjwidj</li>
                  <li>wjkpdowjdp</li>
                  <li>idjwpidj</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Sección 3 */}
      <section className="relative bg-transparent flex flex-col h-screen items-center justify-center snap-center bg-gray-900">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/path-to-technology-image.jpg")',
            filter: "brightness(0.4)",
          }}
        ></div>
        <main className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold">Proyectos Hechos Por Nosotros</h2>
          <p className="text-xl mt-4">
            Conoce algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Proyecto 1 */}
            <div className="bg-transparent backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-400 hover:border-pink-500/10 hover:shadow-fuchsia-200/25">
              <Image
                src="/path-to-project-image.jpg"
                alt="Proyecto 1"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">E-commerce Plataforma</h3>
              <p className="text-gray-300">Desarrollo de una plataforma de comercio electrónico con características personalizadas.</p>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-transparent backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-400 hover:border-pink-500/10 hover:shadow-fuchsia-200/25">
              <Image
                src="/path-to-project-image.jpg"
                alt="Proyecto 2"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Aplicación Web para Gestión</h3>
              <p className="text-gray-300">Una aplicación web avanzada para la gestión de inventarios y pedidos en tiempo real.</p>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-transparent backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-400 hover:border-pink-500/10 hover:shadow-fuchsia-200/25">
              <Image
                src="/path-to-project-image.jpg"
                alt="Proyecto 3"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Landing Page Promocional</h3>
              <p className="text-gray-300">Diseño y desarrollo de una landing page optimizada para conversiones y campañas publicitarias.</p>
            </div>

          </div>
        </main>
      </section>


      {/* Sección 4 */}
      <section className="relative bg-transparent flex flex-col h-screen items-center justify-center snap-center bg-blue-900">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/path-to-clouds-image.jpg")',
            filter: "brightness(0.4)",
          }}
        ></div>
        <main className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold">Join Us</h2>
          <p className="text-xl mt-4">
            Let`s build something amazing together.
          </p>
          <Link href="/contact">
            <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 transition">
              Contact Us
            </button>
          </Link>
        </main>
      </section>
    </div>
  );
};

export default Home;
