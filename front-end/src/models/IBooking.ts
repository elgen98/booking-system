export interface IBooking {
  _id: string;
  name: string;
  email: string;
  guest_amount: number;
  date: string;
  time: string;
}

export interface ISearchOptions {
  date: string;
  guests: number;
}
