import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/bookingSlice";

export default configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
