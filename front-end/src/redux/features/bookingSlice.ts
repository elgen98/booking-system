import { createSlice } from "@reduxjs/toolkit";
import { IBooking } from "../../models/IBooking";

interface BookingState {
  value: IBooking[];
}

interface IAction<T> {
  type: string;
  payload: T;
}

const initialState: BookingState = {
  value: [],
} as BookingState;

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addArrayFromApi: (state, action: IAction<IBooking[]>) => {
      state.value = action.payload;
    },
  },
});
