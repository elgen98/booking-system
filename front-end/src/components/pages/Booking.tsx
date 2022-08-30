import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCurrentBookings } from "../../features/BookingSlice";
import BookingModalOne from "../BookingModals/BookingModalOne";
import BookingModalThree from "../BookingModals/BookingModalThree";
import BookingModalTwo from "../BookingModals/BookingModalTwo";

export default function Booking() {
  const dispatch = useDispatch();
  // Test boolean
  const [otherModals, setShowModals] = useState(false);

  return (
    <div className="flex max-w-max m-auto">
      <div className=" border p-10 rounded-lg">
        <h2 className="text-xl mb-5">
          Börja med att välja datum & antal gäster!
        </h2>
        {!otherModals ? (
          <>
            <BookingModalOne />
            <button onClick={() => setShowModals(true)}>
              Show other modals
            </button>
          </>
        ) : (
          <>
            <BookingModalTwo />
            <BookingModalThree />
            <button onClick={() => setShowModals(false)}>
              Hide other modals
            </button>
          </>
        )}
      </div>
    </div>
  );
}
