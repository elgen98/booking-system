import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";
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
  const [validateMsg, setValidateMsg] = useState([""]);

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
  function removeBooking(e: any, id: string) {
    e.preventDefault();
    console.log(id);
    axios
      .delete("http://localhost:8000/bookings/delete/" + id)

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
      console.log("gppd");
      setCreateBooking({ ...createBooking, [e.target.name]: e.target.value });
    }
  }

  // Add booking: Submit
  function AddSubmit(e: ChangeEvent<HTMLFormElement>) {
    // Checks validation
    validateForm();
    if (validateMsg.length > 0) {
      e.preventDefault();
      console.log("Validation error");
    } else {
      e.preventDefault();
      console.log("Validation good");
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
  }

  // Validation to prevent empty values when adding a new booking
  function validateForm() {
    const { name, email, telephone_number, guest_amount, time, date } =
      createBooking;
    setValidateMsg([]);
    const msg = [];
    if (!name) {
      msg.push("Name is required");
    }
    if (!email) {
      msg.push("Email is required");
    }
    if (!telephone_number) {
      msg.push("Telephone number is required");
    }
    if (!guest_amount) {
      msg.push("Guest amount is required");
    }
    if (!time) {
      msg.push("Time is required");
    }
    if (!date) {
      msg.push("Date is required");
    }
    setValidateMsg(msg);
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
    <>
      {/* Edit a booking */}
      {showUpdateForm ? (
        <>
          <form
            className="relative w-[95%] md:w-[85%] m-auto mb-6 grid grid-cols-2 border border-gray-200 p-4 rounded-md gap-4"
            onSubmit={EditSubmit}
            id={editBooking._id.toString()}
          >
            <label className="col-span-2 lg:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">Namn</span>
              <input
                type="text"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="name"
                onChange={handleChange}
                value={editBooking.name as string}
              />
            </label>

            <label className="col-span-2 lg:col-span-1 flex flex-col text-left ">
              <span className=" font-light text-sm mb-1">Email</span>
              <input
                type="text"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="email"
                onChange={handleChange}
                value={editBooking.email as string}
              />
            </label>

            <label className="col-span-2 lg:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">Nummer</span>
              <input
                type="text"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2 border border-b-slate"
                name="telephone_number"
                onChange={handleChange}
                value={editBooking.telephone_number as string}
              />
            </label>

            <label className="col-span-2 lg:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">Gäster</span>
              <input
                type="number"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="guest_amount"
                onChange={handleChange}
                value={editBooking.guest_amount as number}
              />
            </label>

            <label className="col-span-2 md:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">Tid</span>
              <input
                type="text"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="time"
                onChange={handleChange}
                value={editBooking.time as string}
              />
              <input type="button" value={"18:00"} />
              <input type="button" value={"12:00"} disabled />
            </label>

            <label className="col-span-2 md:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">Datum</span>
              <input
                type="date"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="date"
                onChange={handleChange}
                value={editBooking.date as string}
              />
            </label>

            <input
              type="submit"
              value={"Spara"}
              className="cursor-pointer col-span-2 py-4 bg-slate-100 border border-gray-200 rounded-md"
            />

            <button
              className="cursor-pointer absolute right-0 bg-red-500 text-white rounded-md"
              onClick={() => setShowEditForm(false)}
            >
              <HiX />
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-4 mt-8 gap-4 mx-auto w-[85%]">
        <div className=" col-span-3">
          <div className="">
            <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
              {bookings.map((booking) => (
                <div
                  key={booking._id.toString()}
                  className="bg-blue-50 border border-blue-300 p-4 rounded-lg"
                >
                  <div className="flex justify-between mb-2">
                    <p>{booking.date}</p>
                    <p className=" text-right">
                      {booking.time.slice(0, 2) +
                        ":" +
                        booking.time.slice(2, 4)}
                      <p>Gäster: {booking.guest_amount.toString()}</p>
                    </p>
                  </div>
                  <div className="border border-blue-100 bg-white p-2 rounded-md mb-2">
                    <p>Bokad av: {booking.name}</p>
                    <p>Email: {booking.email}</p>
                    <p>Telefon: {booking.telephone_number}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => removeBooking(e, booking._id.toString())}
                      id={booking._id.toString()}
                      className="flex items-center cursor-pointer bg-red-100 border-red-300 rounded-md p-1"
                    >
                      Remove
                      <HiX />
                    </button>

                    <button
                      className="flex items-center cursor-pointer bg-green-100 rounded-md p-1"
                      onClick={() => {
                        setShowEditForm(true);
                        editCurrBook(booking._id.toString());
                      }}
                    >
                      Edit
                      <FiEdit3 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AdminAdd
          key={createBooking._id as string}
          AddSubmit={AddSubmit}
          handleAdd={handleAdd}
          createBooking={createBooking}
          validateMsg={validateMsg}
        />
      </div>
    </>
  );
}

export default Admin;
