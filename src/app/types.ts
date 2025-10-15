import { Prisma } from '@prisma/client';

export interface Room {
  id: string;
  roomNumber: string;
  description: string;
  pricePerNight: Prisma.Decimal;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  paymentMethod: 'CASH' | 'BANK_TRANSFER' | 'CREDIT_CARD';
  paymentStatus: 'PENDING' | 'PAID' | 'CANCELLED';
  createdAt: Date;
  updatedAt: Date;
}

export type PaymentMethod = 'CASH' | 'BANK_TRANSFER' | 'CREDIT_CARD';