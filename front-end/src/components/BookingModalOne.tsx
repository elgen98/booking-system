import axios from "axios";
import React, { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addAvailableSeatings } from "../features/SeatingOptionsSlice";
import DatePicker from "./DatePicker";
import GuestPicker from "./GuestPicker";

type booleanResponse = {
  seatingOne: boolean;
  seatingTwo: boolean;
};

function BookingModalOne() {
  const dispatch = useDispatch();

  const [seatings, setSeatings] = useState<booleanResponse>({
    seatingOne: false,
    seatingTwo: false,
  });

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

  let buttonOne = <div></div>;
  let buttonTwo = <div></div>;

  if (seatings.seatingOne === true) {
    buttonOne = <button>1800</button>;
  }
  if (seatings.seatingTwo === true) {
    buttonTwo = <button>2100</button>;
  }

  return (
    <div>
      <form action="" method="GET">
        <DatePicker />
        <GuestPicker />
        <button onClick={checkSeatings}>Gå vidare</button>
      </form>
      {buttonOne}
      {buttonTwo}
    </div>
  );
}

export default BookingModalOne;
