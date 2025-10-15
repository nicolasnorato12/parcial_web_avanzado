import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Layout from '../../components/Layout';
import { Room } from '../../types';

const prisma = new PrismaClient();

async function createBooking(formData: FormData) {
  'use server';
  
  // TODO: Implementar autenticación y verificar que el usuario esté logueado
  
  const startDate = new Date(formData.get('startDate') as string);
  const endDate = new Date(formData.get('endDate') as string);
  const paymentMethod = formData.get('paymentMethod') as string;
  const roomId = formData.get('roomId') as string;
  
  // Calcular el total de días
  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
  
  // Obtener el precio de la habitación
  const room = await prisma.room.findUnique({
    where: { id: roomId },
  });

  if (!room) {
    throw new Error('Habitación no encontrada');
  }

  const totalPrice = Number(room.pricePerNight) * days;

  // TODO: Implementar el proceso de pago según el método seleccionado
  
  // Crear la reserva
  await prisma.booking.create({
    data: {
      roomId,
      userId: 'USER_ID', // TODO: Obtener del usuario autenticado
      startDate,
      endDate,
      totalPrice,
      paymentMethod,
      paymentStatus: 'PENDING',
    },
  });

  // Actualizar el estado de la habitación
  await prisma.room.update({
    where: { id: roomId },
    data: { status: 'occupied' },
  });

  redirect('/bookings');
}

export default async function BookRoomPage({ params }: { params: { id: string } }) {
  const room = await prisma.room.findUnique({
    where: { id: params.id },
  });

  if (!room) {
    redirect('/rooms');
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Reservar Habitación {room.roomNumber}
        </h1>
        <div className="mt-8 max-w-xl">
          <form action={createBooking} className="space-y-6">
            <input type="hidden" name="roomId" value={room.id} />
            
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Fecha de llegada
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                Fecha de salida
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                Método de pago
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="CASH">Pago en efectivo</option>
                <option value="BANK_TRANSFER">Consignación bancaria</option>
                <option value="CREDIT_CARD">Tarjeta de crédito</option>
              </select>
            </div>

            {/* Información adicional según el método de pago */}
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Información del pago
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  <strong>Precio por noche:</strong> ${room.pricePerNight.toString()}
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Métodos de pago disponibles:</strong>
                  <ul className="list-disc list-inside mt-2">
                    <li>Efectivo: Pago directo en la recepción del hotel</li>
                    <li>Consignación: Se proporcionarán los datos bancarios para realizar la transferencia</li>
                    <li>Tarjeta de crédito: Proceso seguro a través de nuestra pasarela de pago</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> Para reservas con pago en efectivo o consignación, se requiere un depósito del 20% del valor total.
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Confirmar Reserva
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}