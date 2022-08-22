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
    addArrayFromApi: (state, action: IAction<[]>) => {
      state.value = action.payload;
    },
  },
});

export const { addArrayFromApi } = bookingSlice.actions;
export default bookingSlice.reducer;
