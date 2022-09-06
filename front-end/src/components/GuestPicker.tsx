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
    <div className=" h-2/6 modal-content">
      <label htmlFor="guestAmount" className=" text-xl font-bold">
        Antal gäster
      </label>
      <select
        className=" w-24  border-4 border-gray-500 rounded-md shadow-lg"
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
