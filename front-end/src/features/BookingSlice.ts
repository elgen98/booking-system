import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking, ISearchOptions } from "../models/IBooking";

interface BookingState {
  value: IBooking;
}

const initialState: BookingState = {
  value: {
    name: "",
    email: "",
    guest_amount: 0,
    date: "",
    time: "",
  },
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBookingDate: (state, action: PayloadAction<string>) => {
      state.value.date = action.payload;
    },
    addBookingGuestAmount: (state, action: PayloadAction<number>) => {
      state.value.guest_amount = action.payload;
    },
    addBookingTime: (state, action: PayloadAction<string>) => {
      state.value.time = action.payload;
    },
  },
});

export const { addBookingDate, addBookingGuestAmount, addBookingTime } =
  bookingSlice.actions;

export default bookingSlice.reducer;
