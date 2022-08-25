import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDate } from "../features/SearchOptionSlice";

function DatePicker() {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDate(date));
  }, [date]);

  return (
    <div>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;
