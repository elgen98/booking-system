import { MouseEvent } from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function DateAndGuest() {
  const currentBookings = useSelector(
    (state: RootState) => state.bookings.value
  );
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  function handleDate(e: ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
  }

  function handleGuestAmount(e: ChangeEvent<HTMLSelectElement>) {
    setGuests(parseInt(e.target.value));
  }

  return (
    <>
      <form
        action=""
        className="flex flex-col items-center justify-center border"
      >
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDate}
        />
        <label htmlFor="guestAmount">Amount of guests:</label>
        <select
          name="guestAmount"
          defaultValue={1}
          id="guestAmount"
          onChange={handleGuestAmount}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        <button>Jämför</button>
      </form>
    </>
  );
}
