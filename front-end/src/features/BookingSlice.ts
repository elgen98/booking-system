import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking } from "../models/IBooking";

interface BookingState {
  value: IBooking[];
}

const initialState: BookingState = {
  value: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addCurrentBookings: (state, action: PayloadAction<IBooking[]>) => {
      state.value = action.payload;
      console.log("hello");
    },
  },
});

export const { addCurrentBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
