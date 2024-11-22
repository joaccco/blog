const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url("/path-to-earth-image.jpg")', // Coloca aquí la ruta de la imagen de la Tierra
          filter: 'brightness(0.4)',
        }}
      ></div>

      <main className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Title */}
        <h1 className="text-6xl font-bold">
          We Are Ethereal Devs
        </h1>

        {/* Subtitle */}
        <p className="text-2xl font-semibold">
          Web Solutions and Web Applications
        </p>

        {/* Start Button */}
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">
          Start
        </button>

        {/* Technologies Used (Laravel, Threejs, etc.) */}
        <div className="absolute top-4 right-4 text-purple-400 text-sm">
          {`{ Laravel, Threejs, Tailwind, OAuth }`}
        </div>
      </main>
    </div>
  );
};

export default Home;
