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

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const date = useSelector((state: RootState) => state.searchOption.value);

  function checkSeatings(e: MouseEvent<HTMLButtonElement>) {
    // check if there are available seatings
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    if (mountedRef.current) {
      console.log(searchResult);

      if (searchResult.seatingOne || searchResult.seatingTwo === true) {
        // if there are available seatings
        dispatch(addAvailableSeatings(searchResult));
        dispatch(addBookingDate(date.date));
        dispatch(addBookingGuestAmount(date.guests));
        console.log("hello");
      } else {
        setShow(!show);
      }
      // ← the trick
      console.log("trick: changed");
    }
  }, [searchResult]);

  return (
    <main className=" h-3/5 grid grid-cols-7 grid-rows-4">
      <div className=" col-start-2 col-end-7 sm:col-start-3 sm:col-end-6 ">
        <h1 className=" text-lg sm:text-xl ">Välj datum och antal gäster</h1>
        {show ? (
          <p className=" text-red-600 text-sm col-start-3 col-end-6 row-start-2">
            Tyvärr är vi fullbokade den dagen, prova ett annat datum.
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <form
        action=""
        method="GET"
        className="col-start-3 col-end-6 flex flex-col gap-4"
      >
        <DatePicker />
        <GuestPicker />
      </form>
      <button
        className=" btn-green col-start-6 sm:col-start-5 row-start-4"
        onClick={checkSeatings}
      >
        Gå vidare
      </button>
    </main>
  );
}

export default BookingModalOne;
