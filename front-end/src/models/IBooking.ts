export interface IBooking {
  _id: string;
  created_at: Date;
  name: string;
  email: string;
  guest_amount: number;
  date: Date;
  time: number;
}
