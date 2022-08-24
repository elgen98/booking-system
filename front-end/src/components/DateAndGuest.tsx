import { MouseEvent } from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { IAvailableTables } from "../models/IAvailableTables";
import { IBooking } from "../models/IBooking";

export default function DateAndGuest() {
  const currentBookings = useSelector(
    (state: RootState) => state.bookings.value
  );

  const [newBooking, setNewBooking] = useState<IBooking>();
  const [newDate, setNewDate] = useState("");
  const [newGuestAmount, setNewGuestAmount] = useState(1);
  const [availableTables, setAvailableTables] = useState<IAvailableTables>({
    time18: {
      amount: 15,
    },
    time21: {
      amount: 15,
    },
  });

  function handleDate(e: ChangeEvent<HTMLInputElement>) {
    setNewDate(e.target.value);
  }

  function handleGuestAmount(e: ChangeEvent<HTMLSelectElement>) {
    setNewGuestAmount(parseInt(e.target.value));
  }

  function compareData(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < currentBookings.length; i++) {
      if (currentBookings[i].date === newDate) {
        arr.push(currentBookings[i]);
      }
    }
    console.log(arr);
    console.log(availableTables);
  }

  return (
    <>
      <form action="" className="flex flex-col items-center justify-center">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={newDate}
          onChange={handleDate}
        />
        <label htmlFor="guestAmount">Select amount of guests:</label>
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
        <button onClick={compareData}>Jämför</button>
      </form>
    </>
  );
}
