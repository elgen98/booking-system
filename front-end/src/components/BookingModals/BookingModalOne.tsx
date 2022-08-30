import axios from "axios";
import React, { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addAvailableSeatings } from "../../features/SeatingOptionsSlice";
import DatePicker from "../DatePicker";
import GuestPicker from "../GuestPicker";

type booleanResponse = {
  seatingOne: boolean;
  seatingTwo: boolean;
};

function BookingModalOne() {
  const dispatch = useDispatch();

  const date = useSelector((state: RootState) => state.searchOption.value);

  function checkSeatings(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (date.date && date.guests) {
      axios
        .post<booleanResponse>(
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
        )
        .then((response) => {
          console.log(response.data);
          dispatch(addAvailableSeatings(response.data));
        });
    }
  }

  return (
    <div>
      <form action="" method="GET">
        <div className="flex items-center justify-between gap-5 mb-5">
          <DatePicker />
          <GuestPicker />
        </div>
        <button className="bg-green-500 px-4 py-2 rounded-lg">Gå vidare</button>
      </form>
    </div>
  );
}

export default BookingModalOne;
