import axios from "axios";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

interface IBookings {
  _id: String;
  guest_amount: Number;
  time: Number;
  date: String;
}

function Admin() {
  const [bookings, setBookings] = useState<IBookings[]>([]);

  function removeBooking(e: any) {
    e.preventDefault();
    console.log(e.target.id);
    axios
      .delete("http://localhost:8000/bookings/delete/" + e.target.id)
      .then((response) => {
        console.log(response);
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/bookings")
      .then((response) => setBookings(response.data));
  }, []);

  return (
    <div>
      <div className="flex flex-col mx-auto w-[85%]">
        <div className="flex">
          {bookings.map((booking, index) => (
            <div key={index} className="bg-slate-400 p-4 rounded-lg">
              {/* <p>Datum: {booking.date.split("T")[0]}</p>
              <p>Klockan: {booking.time.toString()}</p>
              <p>Antal gäster: {booking.guest_amount.toString()}</p> */}
              <button
                onClick={removeBooking}
                id={booking._id.toString()}
                className="flex items-center cursor-pointer bg-white"
              >
                Remove
                <HiX />
              </button>
              <button className="flex items-center">
                Edit
                <HiX />
                <input type="time" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
