import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample rooms
  const rooms = [
    {
      roomNumber: '101',
      description: 'Habitación Deluxe con vista al jardín y balcón privado. Incluye cama king size y baño de lujo.',
      pricePerNight: 150.00,
    },
    {
      roomNumber: '102',
      description: 'Suite Junior con sala de estar y minibar. Perfecta para viajes de negocios o parejas.',
      pricePerNight: 180.00,
    },
    {
      roomNumber: '201',
      description: 'Habitación Familiar con dos camas queen size. Ideal para familias o grupos pequeños.',
      pricePerNight: 200.00,
    },
    {
      roomNumber: '202',
      description: 'Suite Presidencial con jacuzzi y terraza privada. La mejor vista de la ciudad.',
      pricePerNight: 300.00,
    },
    {
      roomNumber: '301',
      description: 'Habitación Estándar con cama queen size. Cómoda y acogedora.',
      pricePerNight: 120.00,
    },
    {
      roomNumber: '302',
      description: 'Suite Ejecutiva con escritorio y zona de trabajo. Perfecta para viajes de negocios.',
      pricePerNight: 220.00,
    },
  ];

  for (const room of rooms) {
    await prisma.room.create({
      data: room,
    });
  }

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });