import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addGuests } from "../features/SearchOptionSlice";

function GuestPicker() {
  const dispatch = useDispatch();
  const [guests, setGuests] = useState(1);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selected = e.target.value;
    setGuests(parseInt(selected));
  }

  useEffect(() => {
    dispatch(addGuests(guests));
  });

  return (
    <div className=" col-start-4 col-end-5 flex flex-col items-center">
      <label htmlFor="guestAmount" className=" text-lg">
        Antal gäster:
      </label>
      <select
        className=" w-10 border-2 border-black rounded-lg"
        name="guestAmount"
        id="guestAmount"
        value={guests}
        defaultValue={2}
        onChange={handleChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
    </div>
  );
}

export default GuestPicker;
