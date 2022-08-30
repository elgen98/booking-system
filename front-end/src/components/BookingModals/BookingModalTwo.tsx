import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  addBookingDate,
  addBookingGuestAmount,
  addBookingTime,
} from "../../features/BookingSlice";

export default function BookingModalTwo() {
  const dispatch = useDispatch();

  const availableSeatings = useSelector(
    (state: RootState) => state.seatingOptions.value
  );

  const date = useSelector((state: RootState) => state.searchOption);

  function addBookingDetails(e: MouseEvent<HTMLButtonElement>) {
    dispatch(addBookingDate(date.value.date));
    dispatch(addBookingGuestAmount(date.value.guests));
    dispatch(addBookingTime(e.currentTarget.value));
  }

  let seating1800Btn = <div></div>;
  let seating2100Btn = <div></div>;

  if (availableSeatings.seatingOne === true) {
    seating1800Btn = (
      <button
        value={"1800"}
        onClick={addBookingDetails}
        className="border border-gray-200 py-2 px-4 rounded-lg"
      >
        1800
      </button>
    );
  }

  if (availableSeatings.seatingTwo) {
    seating2100Btn = (
      <button
        value={"2100"}
        onClick={addBookingDetails}
        className="border border-gray-200 py-2 px-4 rounded-lg"
      >
        2100
      </button>
    );
  }
  return (
    <div>
      <h2 className="text-xl mb-4">Available timeslots</h2>
      <div className="flex gap-4">
        {seating1800Btn}
        {seating2100Btn}
      </div>
    </div>
  );
}
