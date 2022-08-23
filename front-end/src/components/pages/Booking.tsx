import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCurrentBookings } from "../../features/BookingSlice";
import DateAndGuest from "../DateAndGuest";
import { IBooking } from "../../models/IBooking";

export default function Booking() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get<IBooking[]>("http://localhost:8000/bookings").then((response) => {
      console.log("data:", response.data);
      dispatch(addCurrentBookings(response.data));
    });
  }, [dispatch]);

  return (
    <>
      <DateAndGuest />
    </>
  );
}
