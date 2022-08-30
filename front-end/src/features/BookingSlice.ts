import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking } from "../models/IBooking";

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
    telephone_number: "",
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
    addBookingName: (state, action: PayloadAction<string>) => {
      state.value.name = action.payload;
    },
    addBookingNumber: (state, action: PayloadAction<string>) => {
      state.value.telephone_number = action.payload;
    },
    addBookingEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
  },
});

export const {
  addBookingDate,
  addBookingGuestAmount,
  addBookingTime,
  addBookingName,
  addBookingNumber,
  addBookingEmail,
} = bookingSlice.actions;

export default bookingSlice.reducer;
