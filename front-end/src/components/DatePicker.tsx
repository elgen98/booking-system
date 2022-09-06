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
    <div className=" h-5/6 modal-content ">
      <label htmlFor="date" className=" text-xl font-bold">
        Datum
      </label>
      <input
        className="border-4 border-gray-500 rounded-md shadow-lg"
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
