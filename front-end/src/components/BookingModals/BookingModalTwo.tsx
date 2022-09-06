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
        className=" w-28 h-14 col-start-2 sm:col-start-4 sm:mx-20 text-2xl border border-gray-500 focus:bg-orange-300 rounded-lg"
        value={"1800"}
        onClick={addBookingDetails}
      >
        1800
      </button>
    );
  } else {
    seating1800Btn = (
      <button
        className=" w-28 h-14 col-start-2 sm:col-start-4 sm:mx-20 text-2xl  border rounded-lg opacity-20"
        disabled
      >
        1800
      </button>
    );
  }

  if (availableSeatings.seatingTwo === true) {
    seating2100Btn = (
      <button
        className=" w-28 h-14 col-start-5 sm:col-start-6 text-2xl  border border-gray-500 focus:bg-orange-300 rounded-lg"
        value={"2100"}
        onClick={addBookingDetails}
      >
        2100
      </button>
    );
  } else {
    seating2100Btn = (
      <button
        className=" w-28 h-14 col-start-5 sm:col-start-6 text-2xl  border rounded-lg opacity-20"
        disabled
      >
        2100
      </button>
    );
  }

  return (
    <main className=" modal-wrapper">
      <img src="../assets/ProgressBar2.png" alt="progressBar" className=" modal-title sm:w-full mt-16 mb-16"></img>
      <div className=" modal-content h-full gap-3 sm:flex-row row-start-1 row-end-4 ">
        <h1 className="text-xl font-bold">Välj tid</h1>
        {seating1800Btn}
        {seating2100Btn}
      </div>
      <br />
      <button
        className=" btn-red col-start-1 sm:col-start-3 row-start-4"
        onClick={() => {
          dispatch(addBookingGuestAmount(0));
          dispatch(addBookingDate(""));
        }}
      >
        Tillbaka
      </button>
      <button
        className=" btn-green col-start-6 row-start-4 "
        onClick={() => {
          dispatch(addBookingTime(selectedTime));
        }}
      >
        Gå vidare
      </button>
    </main>
  );
}
