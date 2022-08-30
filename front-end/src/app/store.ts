import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/BookingSlice";
import searchOptionReducer from "../features/SearchOptionSlice";
import seatingOptionsReducer from "../features/SeatingOptionsSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingReducer,
    searchOption: searchOptionReducer,
    seatingOptions: seatingOptionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
