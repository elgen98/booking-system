import axios from "axios";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
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
  const mountedRef = useRef(false);

  const [searchResult, setSearchResult] = useState<booleanResponse>({
    seatingOne: false,
    seatingTwo: false,
  });

  const dispatch = useDispatch();

  const date = useSelector((state: RootState) => state.searchOption.value);

  function checkSeatings(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (date.date && date.guests) {
      axios
        .post<booleanResponse>(
          "http://localhost:8000/bookings/searchAvailabilty",
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
          mountedRef.current = true;
          setSearchResult(response.data);
        });
    }
  }

  useEffect(() => {
    if (mountedRef.current) {
      console.log(searchResult);

      if (searchResult.seatingOne || searchResult.seatingTwo === true) {
        dispatch(addAvailableSeatings(searchResult));
        dispatch(addBookingDate(date.date));
        dispatch(addBookingGuestAmount(date.guests));
        console.log("hello");
      } else
        alert("Inga bord tillgängliga för detta datum, prova ett annat datum.");
      // ← the trick
      console.log("trick: changed");
    }
  }, [searchResult]);

  /*   useEffect(() => {
    console.log("rendered");
    mountedRef.current = true;
    // update the state after some time
    setTimeout(setValue, 1000, true);
  }, []); */

  /* useEffect(() => {
    console.log(searchResult);

    if (searchResult.seatingOne || searchResult.seatingTwo === true) {
      dispatch(addAvailableSeatings(searchResult));
      dispatch(addBookingDate(date.date));
      dispatch(addBookingGuestAmount(date.guests));
      console.log("hello");
    } else console.log("No seats available");
  }, [searchResult]);
 */
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
