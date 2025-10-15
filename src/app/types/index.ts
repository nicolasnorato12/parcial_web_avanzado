export interface Room {
  id: string;
  roomNumber: string;
  description: string;
  status: string;
  pricePerNight: number;
  createdAt: Date;
  updatedAt: Date;
}