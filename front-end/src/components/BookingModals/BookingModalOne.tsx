import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import DatePicker from "../DatePicker";
import GuestPicker from "../GuestPicker";

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
        <div className="flex items-center justify-between mb-5">
          <DatePicker />
          <GuestPicker />
        </div>
        <button className="bg-green-500 px-4 py-2 rounded-lg">Gå vidare</button>
      </form>
    </div>
  );
}

export default BookingModalOne;
