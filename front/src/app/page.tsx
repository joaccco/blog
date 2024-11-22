const Home = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "radial-gradient(circle at 50% 50%, #ffffff, #143188)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          content: ".",
          position: "absolute",
          top: "0",
          left: "0",
          width: "200%",
          height: "200%",
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "4px 4px",
          opacity: "0.1",
          animation: "stars 60s linear infinite",
        }}
      >
        <main className="flex-grow flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-white">Ethereal-Devs</h1>
            <h2 className="text-white">
              Ayuda a que los sueños digitales se hagan realidad
            </h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
