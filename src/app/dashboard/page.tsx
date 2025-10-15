'use client';

import { Providers } from '../providers';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Layout from '../components/Layout';

export default function DashboardPage() {
  return (
    <Providers>
      <DashboardContent />
    </Providers>
  );

function DashboardContent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  if (!session) {
    redirect('/login');
  }

  const handleLogout = async () => {
    // Cerrar sesión y limpiar cookies
    const { signOut } = await import('next-auth/react');
    signOut({ callbackUrl: '/login' });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Panel de Control
            </h1>
            <p className="mt-2 text-gray-600">
              Bienvenido, {session.user?.name}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Cerrar sesión
          </button>
        </div>

        {session.user?.role === 'ADMIN' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Estadísticas Generales */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Estadísticas Generales
              </h3>
              {/* Aquí irían las estadísticas */}
            </div>

            {/* Gestión de Habitaciones */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Gestión de Habitaciones
              </h3>
              {/* Aquí irían las acciones de gestión de habitaciones */}
            </div>

            {/* Gestión de Usuarios */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Gestión de Usuarios
              </h3>
              {/* Aquí irían las acciones de gestión de usuarios */}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mis Reservas */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Mis Reservas
              </h3>
              {/* Aquí irían las reservas del usuario */}
            </div>

            {/* Nueva Reserva */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Nueva Reserva
              </h3>
              {/* Aquí iría el formulario de nueva reserva */}
            </div>

            {/* Mi Perfil */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Mi Perfil
              </h3>
              {/* Aquí iría la información del perfil */}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

}