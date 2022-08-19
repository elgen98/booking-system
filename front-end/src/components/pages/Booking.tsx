import axios from "axios";
import { useEffect } from "react";
import BookingService from "../../services/BookingService";
import DateAndGuest from "../DateAndGuest";

export default function Booking() {
  useEffect(() => {
    axios.get("http://localhost:8000/bookings").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <DateAndGuest />
    </>
  );
}
