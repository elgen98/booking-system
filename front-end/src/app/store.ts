import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/BookingSlice";

export const store = configureStore({
  reducer: { bookings: bookingReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
