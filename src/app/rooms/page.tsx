import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Room } from '../types';

const prisma = new PrismaClient();

export default async function RoomsPage() {
  // Obtener todas las habitaciones
  const rooms: Room[] = await prisma.room.findMany({
    orderBy: {
      roomNumber: 'asc',
    },
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Todas las Habitaciones
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white overflow-hidden shadow-lg rounded-lg"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Habitación {room.roomNumber}
                </h2>
                <p className="mt-2 text-gray-600">{room.description}</p>
                <div className="mt-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    room.status === 'available'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {room.status === 'available' ? 'Disponible' : 'Ocupada'}
                  </span>
                  <span className="text-indigo-600 font-bold text-xl">
                    ${room.pricePerNight.toString()} / noche
                  </span>
                </div>
                {room.status === 'available' && (
                  <div className="mt-4">
                    <Link
                      href={`/book-room/${room.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Reservar Ahora
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}