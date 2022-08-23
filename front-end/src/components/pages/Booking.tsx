import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addCurrentBookings } from "../../features/BookingSlice";
import DateAndGuest from "../DateAndGuest";
import { IBooking } from "../../models/IBooking";

export default function Booking() {
  const reduxBookings = useSelector((state: RootState) => state.bookings.value);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get<IBooking[]>("http://localhost:8000/bookings").then((response) => {
      console.log("data:", response.data);
      dispatch(addCurrentBookings(response.data));
    });
  }, []);

  return (
    <>
      <DateAndGuest />
    </>
  );
}
