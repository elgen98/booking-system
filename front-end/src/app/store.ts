import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/BookingSlice";
import searchOptionReducer from "../features/SearchOptionSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingReducer,
    searchOption: searchOptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
