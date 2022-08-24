import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

interface IBookings {
  _id: String;
  name: String;
  email: String;
  telephone_number: String;
  guest_amount: Number;
  time: String;
  date: String;
}

function refreshPage() {
  window.location.reload();
}

function Admin() {
  const [bookings, setBookings] = useState<IBookings[]>([]);
  const [createBooking, setCreateBooking] = useState<IBookings>({
    _id: "",
    name: "",
    email: "",
    telephone_number: "",
    guest_amount: 0,
    time: "",
    date: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  function removeBooking(e: any) {
    e.preventDefault();
    console.log(e.target.id);
    axios
      .delete("http://localhost:8000/bookings/delete/" + e.target.id)
      .then((response) => {
        console.log(response);
        refreshPage();
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/bookings")
      .then((response) => setBookings(response.data));
  }, []);

  // Add
  function handleAdd(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.type === "number") {
      setCreateBooking({ ...createBooking, [e.target.name]: +e.target.value });
    } else {
      setCreateBooking({ ...createBooking, [e.target.name]: e.target.value });
    }
  }

  function handleAddSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/bookings/create", createBooking)
      .then((res) => {
        console.log(res);
        refreshPage();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <div className="flex flex-col mx-auto w-[85%]">
        <div className="flex">
          {bookings.map((booking, index) => (
            <div key={index} className="bg-slate-400 p-4 rounded-lg">
              <p>Bokad av: {booking.name}</p>
              <p>Email: {booking.email}</p>
              <p>Telefon: {booking.telephone_number}</p>
              <p>Datum {booking.date}</p>
              <p>Klockan: {booking.time}</p>
              {/* <p>Antal gäster: {booking.guest_amount}</p> */}
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
                {/* <input type="time" /> */}
              </button>
            </div>
          ))}
        </div>
      </div>
      {showAddForm ? (
        <>
          <form onSubmit={handleAddSubmit}>
            <div>
              <label>
                Namn
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="name"
                  onChange={handleAdd}
                />
              </label>

              <label>
                Email
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="email"
                  onChange={handleAdd}
                />
              </label>

              <label>
                Nummer
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="telephone_number"
                  onChange={handleAdd}
                />
              </label>
            </div>

            <div>
              <label>
                Gäster
                <input
                  type="number"
                  className="border-solid border-2 border-sky-500"
                  name="guest_amount"
                  onChange={handleAdd}
                />
              </label>

              <label>
                Tid
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="time"
                  onChange={handleAdd}
                />
              </label>

              <label>
                Datum
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="date"
                  onChange={handleAdd}
                />
              </label>
            </div>
            <button type="submit">Submit</button>
            <br />
            <button onClick={() => setShowAddForm(false)}>Close</button>
          </form>
        </>
      ) : (
        <>
          <button onClick={() => setShowAddForm(true)}>Add booking</button>
        </>
      )}
    </div>
  );
}

export default Admin;
