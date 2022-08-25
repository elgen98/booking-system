import axios from "axios";
import React, { useEffect } from "react";
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
  useEffect(() => {
    if (date.date && date.guests) {
      axios.post<IGuest>(
        "localhost:8000/searchAvailability",
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
    }
  });

  return (
    <div>
      <form action="" method="GET">
        <DatePicker />
        <GuestPicker />
        <button>Gå vidare</button>
      </form>
    </div>
  );
}

export default BookingModalOne;
