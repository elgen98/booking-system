import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISeatingOptions } from "../models/IBooking";

interface SearchOptionsState {
  value: ISeatingOptions;
}

type booleanResponse = {
  seatingOne: boolean;
  seatingTwo: boolean;
};

const initialState: SearchOptionsState = {
  value: {
    seatingOne: false,
    seatingTwo: false,
  },
};

export const seatingOptionsSlice = createSlice({
  name: "seatingOptions",
  initialState,
  reducers: {
    addAvailableSeatings: (state, action: PayloadAction<booleanResponse>) => {
      state.value = action.payload;
    },
  },
});

export const { addAvailableSeatings } = seatingOptionsSlice.actions;

export default seatingOptionsSlice.reducer;
