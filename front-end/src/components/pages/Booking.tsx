import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import BookingModalOne from "../BookingModalOne";
import BookingModalTwo from "../BookingModalTwo";

export default function Booking() {
  const availableSeatings = useSelector(
    (state: RootState) => state.seatingOptions.value
  );

  console.log(availableSeatings);
  if (availableSeatings.seatingOne || availableSeatings.seatingTwo === true) {
    return <BookingModalTwo />;
  } else {
    return (
      <div className="flex max-w-max m-auto">
        <div className=" bg-gray-200">
          <BookingModalOne />
        </div>
      </div>
    );
  }
}
