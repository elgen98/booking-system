import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchOptions } from "../models/IBooking";

interface SearchOptionState {
  value: ISearchOptions;
}

const initialState: SearchOptionState = {
  value: {
    date: "",
    guests: 0,
  },
};

export const searchOptionsSlice = createSlice({
  name: "searchOptions",
  initialState,
  reducers: {
    addGuests: (state, action: PayloadAction<number>) => {
      state.value.guests = action.payload;
    },
    addDate: (state, action: PayloadAction<string>) => {
      state.value.date = action.payload;
    },
  },
});

export const { addGuests, addDate } = searchOptionsSlice.actions;

export default searchOptionsSlice.reducer;
