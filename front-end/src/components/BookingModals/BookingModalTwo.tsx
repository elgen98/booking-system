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

  let seating1800Btn = <div></div>;
  let seating2100Btn = <div></div>;

  if (availableSeatings.seatingOne === true) {
    seating1800Btn = (
      <button
        className=" w-28 h-14 col-start-3 text-2xl mb-8 focus:bg-slate-500 rounded-lg"
        value={"1800"}
        onClick={addBookingDetails}
      >
        1800
      </button>
    );
  }

  if (availableSeatings.seatingTwo === true) {
    seating2100Btn = (
      <button
        className=" w-28 h-14 col-start-5 text-2xl mb-8 focus:bg-slate-500 rounded-lg"
        value={"2100"}
        onClick={addBookingDetails}
      >
        2100
      </button>
    );
  }

  return (
    <main className=" h-3/5 grid grid-cols-7 gap-6">
      <h1 className=" text-xl col-start-3 col-end-6">
        Välj tid för din sittning
      </h1>
      {seating1800Btn}
      {seating2100Btn}
      <br />
      <button
        className=" btn-red col-start-2"
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
