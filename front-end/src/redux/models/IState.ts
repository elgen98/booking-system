import { IBooking } from "../../models/IBooking";

export interface IState {
  booking: IValue;
}

interface IValue {
  value: IBooking[];
}
