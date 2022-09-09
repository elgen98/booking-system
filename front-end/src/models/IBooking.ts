export interface IBooking {
  name: string;
  email: string;
  guest_amount: number;
  date: string;
  time: string;
  telephone_number: string;
}

export interface ISearchOptions {
  date: string;
  guests: number;
}

export interface ISeatingOptions {
  seatingOne: boolean;
  seatingTwo: boolean;
}
