import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCurrentBookings } from "../../features/BookingSlice";
import BookingModalOne from "../BookingModalOne";

export default function Booking() {
  const dispatch = useDispatch();

  return (
    <div className="flex max-w-max m-auto">
      <div className=" bg-gray-200">
        <BookingModalOne />
      </div>
    </div>
  );
}
