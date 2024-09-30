
import "../styles/globals.css";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex-grow flex flex-col gap-8 items-center sm:items-start">

          <div className="flex flex-col items-center justify-center h-10 bg-red-300">
            <h1 className="text-4xl font-bold">Contacto</h1>
            <p className="mt-4 text-lg">Si tienes alguna pregunta, no dudes en contactarme.</p>
            hola hola
          </div>
        </main>
      </div>
    </div>

  );
};

export default Home;