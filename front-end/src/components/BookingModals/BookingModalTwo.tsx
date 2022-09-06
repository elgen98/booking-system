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
        className=" w-28 h-14 col-start-2 sm:col-start-4 sm:mx-20 text-2xl sm:text-4xl border border-gray-500 focus:bg-gray-500 rounded-lg sm:w-1/5 sm:h-1/5"
        value={"1800"}
        onClick={addBookingDetails}
      >
        1800
      </button>
    );
  } else {
    seating1800Btn = (
      <button
        className=" w-28 h-14 col-start-2 sm:col-start-4 sm:mx-20 text-2xl sm:text-4xl border rounded-lg opacity-20 sm:w-1/5 sm:h-1/5"
        disabled
      >
        1800
      </button>
    );
  }

  if (availableSeatings.seatingTwo === true) {
    seating2100Btn = (
      <button
        className=" w-28 h-14 col-start-5 sm:col-start-6 text-2xl sm:text-4xl border border-gray-500 focus:bg-gray-500 rounded-lg sm:w-1/5 sm:h-1/5"
        value={"2100"}
        onClick={addBookingDetails}
      >
        2100
      </button>
    );
  } else {
    seating2100Btn = (
      <button
        className=" w-28 h-14 col-start-5 sm:col-start-6 text-2xl sm:text-4xl border rounded-lg opacity-20 sm:w-1/5 sm:h-1/5"
        disabled
      >
        2100
      </button>
    );
  }

  return (
    <main className=" modal-wrapper">
      <div className="modal-title mb-10">
        <img src="../assets/ProgressBar2.png" alt="progressBar" className="hidden sm:block" />
        <img src="../assets/ProgressBar2Mobile.png" alt="progressBar" className=" sm:hidden" />
      </div>
      <div className=" modal-content h-full gap-3 sm:flex-row row-start-1 row-end-5 ">
        <h1 className="hidden sm:block text-2xl font-bold">Välj tid</h1>
        {seating1800Btn}
        {seating2100Btn}
      </div>
      <br />
      <button
        className=" btn-red col-span-4 sm:col-span-2 sm:col-start-3 row-start-5"
        onClick={() => {
          dispatch(addBookingGuestAmount(0));
          dispatch(addBookingDate(""));
        }}
      >
        Tillbaka
      </button>
      <button
        className=" btn-green col-span-4 sm:col-span-2 sm:col-start-5 row-start-5"
        onClick={() => {
          dispatch(addBookingTime(selectedTime));
        }}
      >
        Gå vidare
      </button>
    </main>
  );
}
