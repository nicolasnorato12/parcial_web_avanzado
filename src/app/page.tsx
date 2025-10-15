import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import Layout from './components/Layout';
import { Room } from './types';

// Initialize PrismaClient
const prisma = new PrismaClient();

export default async function HomePage() {
  const session = await auth();
  
  // Obtener las habitaciones disponibles
  const availableRooms = await prisma.room.findMany({
    where: {
      status: 'available',
    },
    take: 6, // Limitamos a 6 habitaciones para la página principal
  });

  return (
    <Layout>
      {/* Header/Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Bienvenido a</span>
                  <span className="block text-indigo-600">HotelAdmin Plus</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Disfruta de una experiencia única en nuestro hotel. Habitaciones de lujo, 
                  servicio excepcional y las mejores comodidades para tu estancia.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/rooms"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Ver Habitaciones
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Iniciar Sesión
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Available Rooms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Habitaciones Disponibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white overflow-hidden shadow-lg rounded-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Habitación {room.roomNumber}
                </h3>
                <p className="mt-2 text-gray-600">{room.description}</p>
                <div className="mt-4">
                  <span className="text-indigo-600 font-bold text-xl">
                    ${room.pricePerNight.toString()} / noche
                  </span>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/book-room/${room.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Reservar Ahora
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Ofrecemos una amplia gama de servicios para hacer tu estancia inolvidable.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Room Service */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Servicio a la Habitación</h3>
                <p className="mt-2 text-gray-600">
                  Disfruta de nuestro menú las 24 horas del día directamente en tu habitación.
                </p>
              </div>

              {/* Spa */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Spa & Bienestar</h3>
                <p className="mt-2 text-gray-600">
                  Relájate con nuestros tratamientos de spa y servicios de masaje.
                </p>
              </div>

              {/* Airport Transfer */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Traslado al Aeropuerto</h3>
                <p className="mt-2 text-gray-600">
                  Servicio de transporte desde y hacia el aeropuerto disponible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/contact" className="text-gray-400 hover:text-gray-500">
              Contacto
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-gray-500">
              Sobre Nosotros
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-500">
              Términos
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 HotelAdmin Plus. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
