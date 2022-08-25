import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import AdminAdd from "./AdminAdd";

export interface IBookings {
  _id: String;
  name: String;
  email: String;
  telephone_number: String;
  guest_amount: Number;
  time: String;
  date: String;
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
  const [editBooking, setEditBooking] = useState<IBookings>({
    _id: "",
    name: "",
    email: "",
    telephone_number: "",
    guest_amount: 0,
    time: "",
    date: "",
  });

  const [showUpdateForm, setShowEditForm] = useState(false);

  function refreshPage() {
    window.location.reload();
  }

  // Get all bookings
  useEffect(() => {
    axios
      .get("http://localhost:8000/bookings")
      .then((response) => setBookings(response.data));
  }, []);

  // Remove booking: Removes the current booking
  function removeBooking(e: any) {
    e.preventDefault();
    console.log(e.target.id);
    axios
      .delete("http://localhost:8000/bookings/delete/" + e.target.id)
      .then((response) => {
        console.log(response);
        refreshPage();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // Add Booking: Inputs
  function handleAdd(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.type === "number") {
      setCreateBooking({ ...createBooking, [e.target.name]: +e.target.value });
    } else {
      setCreateBooking({ ...createBooking, [e.target.name]: e.target.value });
    }
  }

  // Add booking: Submit
  function AddSubmit(e: ChangeEvent<HTMLFormElement>) {
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

  // Edit booking: Get current booking
  function editCurrBook(id: string) {
    for (let i = 0; i < bookings.length; i++) {
      if (bookings[i]._id === id) {
        setEditBooking(bookings[i]);
        console.log(bookings[i], "Booking[i]");
      } else {
        console.log("error");
      }
    }
  }

  // Edit booking: Inputs
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.type === "number") {
      setEditBooking({ ...editBooking, [e.target.name]: +e.target.value });
    } else {
      setEditBooking({ ...editBooking, [e.target.name]: e.target.value });
    }
  }

  // Edit booking: Submit form
  function EditSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .put("http://localhost:8000/bookings/update/" + e.target.id, editBooking)
      .then((res) => {
        setEditBooking(editBooking);
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
          {bookings.map((booking) => (
            <div
              key={booking._id.toString()}
              className="bg-slate-400 p-4 rounded-lg"
            >
              <p>Bokad av: {booking.name}</p>
              <p>Email: {booking.email}</p>
              <p>Telefon: {booking.telephone_number}</p>
              <p>Datum {booking.date}</p>
              <p>Tid: {booking.time}</p>
              <p>Antal Gäster: {booking.guest_amount.toString()}</p>
              <button
                onClick={removeBooking}
                id={booking._id.toString()}
                className="flex items-center cursor-pointer bg-white"
              >
                Remove
                <HiX />
              </button>

              <button
                className="flex items-center cursor-pointer bg-white"
                onClick={() => {
                  setShowEditForm(true);
                  editCurrBook(booking._id.toString());
                }}
              >
                Edit
                <HiX />
              </button>
            </div>
          ))}
        </div>
      </div>
      <AdminAdd
        key={createBooking._id as string}
        AddSubmit={AddSubmit}
        handleAdd={handleAdd}
      />

      {/* Edit a booking */}
      {showUpdateForm ? (
        <>
          <form onSubmit={EditSubmit} id={editBooking._id.toString()}>
            <div>
              <label>
                Namn
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="name"
                  onChange={handleChange}
                  value={editBooking.name as string}
                />
              </label>

              <label>
                Email
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="email"
                  onChange={handleChange}
                  value={editBooking.email as string}
                />
              </label>

              <label>
                Nummer
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="telephone_number"
                  onChange={handleChange}
                  value={editBooking.telephone_number as string}
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
                  onChange={handleChange}
                  value={editBooking.guest_amount as number}
                />
              </label>

              <label>
                Tid
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="time"
                  onChange={handleChange}
                  value={editBooking.time as string}
                />
              </label>

              <label>
                Datum
                <input
                  type="date"
                  className="border-solid border-2 border-sky-500"
                  name="date"
                  onChange={handleChange}
                  value={editBooking.date as string}
                />
              </label>
            </div>
            <input type="submit" value={"Submit"} className="cursor-pointer" />
            <br />
            <button onClick={() => setShowEditForm(false)}>Close</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Admin;
