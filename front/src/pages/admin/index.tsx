// src/pages/admin/index.js

import Link from 'next/link';

const AdminPanel = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <nav className="mb-4">
        <ul>
          <li>
            <Link href="/admin/articulos">
              <a className="text-blue-500 hover:underline">Gestionar Artículos</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/categorias">
              <a className="text-blue-500 hover:underline">Gestionar Categorías</a>
            </Link>
          </li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </div>
  );
};

export default AdminPanel;