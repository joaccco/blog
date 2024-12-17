import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
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
          <h2 className="text-5xl font-bold">Innovative Solutions</h2>
          <p className="text-xl mt-4">
            Building the future of web applications.
          </p>
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
            Let's build something amazing together.
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
