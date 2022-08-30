import React, { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  addBookingTime,
  removeBookingGuestAndDate,
} from "../../features/BookingSlice";

export default function BookingModalTwo() {
  const [selectedTime, setSelectedTime] = useState("");

  const dispatch = useDispatch();

  const availableSeatings = useSelector(
    (state: RootState) => state.seatingOptions.value
  );

  function addBookingDetails(e: MouseEvent<HTMLButtonElement>) {
    setSelectedTime(e.currentTarget.value);
  }

  let seating1800Btn = <div></div>;
  let seating2100Btn = <div></div>;

  if (availableSeatings.seatingOne === true) {
    seating1800Btn = (
      <button value={"1800"} onClick={addBookingDetails}>
        1800
      </button>
    );
  }

  if (availableSeatings.seatingTwo) {
    seating2100Btn = (
      <button value={"2100"} onClick={addBookingDetails}>
        2100
      </button>
    );
  }
  return (
    <div>
      <h2>Available seatings:</h2>
      {seating1800Btn}
      {seating2100Btn}
      <br />
      <button
        onClick={() => {
          dispatch(removeBookingGuestAndDate);
        }}
      >
        Tillbaka
      </button>
      <button
        onClick={() => {
          dispatch(addBookingTime(selectedTime));
        }}
      >
        Gå vidare
      </button>
    </div>
  );
}
