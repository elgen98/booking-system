import { useState } from "react";
import { useDispatch } from "react-redux";
import BookingModalOne from "../BookingModals/BookingModalOne";
import BookingModalThree from "../BookingModals/BookingModalThree";
import BookingModalTwo from "../BookingModals/BookingModalTwo";

export default function Booking() {
  // Test boolean
  const [otherModals, setShowModals] = useState(false);

  return (
    <div className="flex max-w-max m-auto">
      <div className=" bg-gray-200">
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
