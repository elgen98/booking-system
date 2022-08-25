import axios from "axios";
import React, { MouseEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import DatePicker from "./DatePicker";
import GuestPicker from "./GuestPicker";

type IGuest = {
  date: string;
  guests: string;
};

function BookingModalOne() {
  const date = useSelector((state: RootState) => state.searchOption.value);
  function lol(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (date.date && date.guests) {
      axios.post<IGuest>(
        "http://localhost:8000/searchAvailabilty",
        {
          date: date.date,
          guests: date.guests,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("hello");
    }
  }

  return (
    <div>
      <form action="" method="GET">
        <DatePicker />
        <GuestPicker />
        <button onClick={lol}>Gå vidare</button>
      </form>
    </div>
  );
}

export default BookingModalOne;
