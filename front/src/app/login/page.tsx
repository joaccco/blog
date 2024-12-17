import AuthLayout from "../AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Iniciar Sesión
        </button>
      </form>
    </AuthLayout>
  );
}
