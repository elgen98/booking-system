import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import BookingModalFour from "../BookingModals/BookingModalFour";
import BookingModalOne from "../BookingModals/BookingModalOne";
import BookingModalThree from "../BookingModals/BookingModalThree";
import BookingModalTwo from "../BookingModals/BookingModalTwo";

export default function Booking() {
  // Test boolean
  const [otherModals, setShowModals] = useState(false);
  const availableSeatings = useSelector(
    (state: RootState) => state.seatingOptions.value
  );

  if (availableSeatings.seatingOne || availableSeatings.seatingTwo === true) {
    return (
      <div className="flex max-w-max m-auto">
        <div className=" border border-gray-200 rounded-lg p-10">
          <BookingModalTwo />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex max-w-max m-auto">
        <div className=" border border-gray-200 rounded-lg p-10">
          {!otherModals ? (
            <>
              <BookingModalOne />
              <button onClick={() => setShowModals(true)}>
                Show other modals
              </button>
            </>
          ) : (
            <>
              <BookingModalThree />
              <BookingModalFour />
              <button onClick={() => setShowModals(false)}>
                Hide other modals
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
