export interface IBooking {
  _id: string;
  createdAt: Date;
  name: string;
  email: string;
  guest_amount: number;
  date: Date;
  time: number;
}
