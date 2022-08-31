import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDate } from "../features/SearchOptionSlice";

function DatePicker() {
  var today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDate(date));
  }, [date]);

  return (
    <div className=" col-start-3 col-end-6 flex flex-col items-center">
      <label htmlFor="date" className=" text-lg">
        Datum:
      </label>
      <input
        className="border-2 border-black rounded-lg"
        type="date"
        id="date"
        name="date"
        value={date}
        min={today}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;
