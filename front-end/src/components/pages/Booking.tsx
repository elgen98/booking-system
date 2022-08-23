import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addCurrentBookings } from "../../features/BookingSlice";
import DateAndGuest from "../DateAndGuest";
import { IBooking } from "../../models/IBooking";

export default function Booking() {
  const [bookingName, setBookingName] = useState<IBooking[]>([]);

  const bookings = useSelector((state: RootState) => state.bookings.value);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8000/bookings").then((response) => {
      console.log("data:", response.data);
      setBookingName(response.data);
      console.log(bookingName);
      /* dispatch(addCurrentBookings(bookingName)); */
      console.log(bookings);
    });
  }, []);

  return (
    <>
      <DateAndGuest />
    </>
  );
}
