import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import AdminAdd from "./pages/Admin/AdminAdd";
import AdminEdit from "./pages/Admin/AdminEdit";
import AdminPrint from "./pages/Admin/AdminPrint";

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
      <AdminEdit
        // id as key
        key={editBooking._id as string}
        // Object as prop
        editBooking={editBooking}
        // Boolean as prop
        showUpdateForm={showUpdateForm}
        // State as prop
        setShowEditForm={setShowEditForm}
        // Function as prop
        handleChange={handleChange}
        // Function as prop
        EditSubmit={EditSubmit}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-4 mt-8 gap-4 mx-auto w-[85%]">
        <AdminPrint
          // Array as prop
          bookings={bookings}
          // Function as prop
          removeBooking={removeBooking}
          // Function as prop
          editCurrBook={editCurrBook}
          // useState as prop
          setShowEditForm={setShowEditForm}
        />
        <AdminAdd
          // Id as key
          key={createBooking._id as string}
          // Function as prop
          AddSubmit={AddSubmit}
          // Function as prop
          handleAdd={handleAdd}
          // Object as prop
          createBooking={createBooking}
          // Function as prop
          validateMsg={validateMsg}
        />
      </div>
    </>
  );
}

export default Admin;
