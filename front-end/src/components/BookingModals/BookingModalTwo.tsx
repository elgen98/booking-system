import React, { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  addBookingDate,
  addBookingGuestAmount,
  addBookingTime,
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

  let seating1800Btn = <button></button>;
  let seating2100Btn = <button></button>;

  if (availableSeatings.seatingOne === true) {
    seating1800Btn = (
      <button
        className=" w-28 h-14 col-start-2 sm:col-start-4 sm:mx-20 text-2xl mb-8 border focus:bg-orange-300 rounded-lg"
        value={"1800"}
        onClick={addBookingDetails}
      >
        1800
      </button>
    );
  } else {
    seating1800Btn = (
      <button
        className=" w-28 h-14 col-start-2 sm:col-start-4 sm:mx-20 text-2xl mb-8 border rounded-lg opacity-20"
        disabled
      >
        1800
      </button>
    );
  }

  if (availableSeatings.seatingTwo === true) {
    seating2100Btn = (
      <button
        className=" w-28 h-14 col-start-5 sm:col-start-6 text-2xl mb-8 border focus:bg-orange-300 rounded-lg"
        value={"2100"}
        onClick={addBookingDetails}
      >
        2100
      </button>
    );
  } else {
    seating2100Btn = (
      <button
        className=" w-28 h-14 col-start-5 sm:col-start-6 text-2xl mb-8 border rounded-lg opacity-20"
        disabled
      >
        2100
      </button>
    );
  }

  return (
    <main className=" h-3/5 grid grid-cols-7 sm:grid-cols-9">
      <h1 className=" text-xl col-start-2 col-end-7 sm:col-start-4 sm:col-end-7 ">
        Välj tid för din sittning
      </h1>
      {seating1800Btn}
      {seating2100Btn}
      <br />
      <button
        className=" btn-red col-start-1 sm:col-start-4 sm:mx-20"
        onClick={() => {
          dispatch(addBookingGuestAmount(0));
          dispatch(addBookingDate(""));
        }}
      >
        Tillbaka
      </button>
      <button
        className=" btn-green col-start-6 "
        onClick={() => {
          dispatch(addBookingTime(selectedTime));
        }}
      >
        Gå vidare
      </button>
    </main>
  );
}
