import axios from "axios";
import { useEffect } from "react";
import DateAndGuest from "../DateAndGuest";

export default function Booking() {
  useEffect(() => {
    axios.get("http://localhost:8000/bookings").then((response) => {
      console.log("data:", response.data);
    });
  }, []);

  return (
    <>
      <DateAndGuest />
    </>
  );
}
