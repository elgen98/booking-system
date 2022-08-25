import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking, ISearchOptions } from "../models/IBooking";

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
    },
  },
});

export const { addCurrentBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
