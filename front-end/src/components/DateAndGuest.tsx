import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IBooking } from "../models/IBooking";

export default function DateAndGuest() {
  const currentBookings = useSelector(
    (state: RootState) => state.bookings.value
  );

  const [newBooking, setNewBooking] = useState<IBooking>();
  const [dateString, setDateString] = useState("");

  function handleDate(e: ChangeEvent<HTMLInputElement>) {
    setDateString(e.target.value);
  }

  useEffect(() => {
    console.log(dateString);
  }, [dateString]);

  return (
    <>
      <form action="" className="flex flex-col items-center justify-center">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={dateString}
          onChange={handleDate}
        />
        <label htmlFor="guestAmount">Select amount of guests:</label>
        <select name="guestAmount" id="guestAmount">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
        {/* <button onClick={compareDates}>Jämför</button> */}
      </form>
    </>
  );
}
