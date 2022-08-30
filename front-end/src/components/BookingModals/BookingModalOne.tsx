import axios from "axios";
import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addAvailableSeatings } from "../../features/SeatingOptionsSlice";
import {
  addBookingDate,
  addBookingGuestAmount,
} from "../../features/BookingSlice";
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
          dispatch(addBookingDate(date.date));
          dispatch(addBookingGuestAmount(date.guests));
        });
    }
  }

  return (
    <div>
      <form action="" method="GET">
        <DatePicker />
        <GuestPicker />
        <button onClick={checkSeatings}>Gå vidare</button>
      </form>
    </div>
  );
}

export default BookingModalOne;
