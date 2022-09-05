import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookingEmail,
  addBookingName,
  addBookingNumber,
  addBookingTime,
} from "../../features/BookingSlice";

function BookingModalThree() {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    telephone: "",
  });
  const [validateMsg, setValidateMsg] = useState([""]);
  const [goodValidate, setGoodValidate] = useState(false);

  const newbooking = useSelector((state: RootState) => state.bookings.value);

  function handleUserInput(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }

  async function handleClick(e: MouseEvent<HTMLInputElement>) {
    validateForm();
    e.preventDefault();
    if (validateMsg.length > 0) {
      dispatch(addBookingName(userInfo.name));
      dispatch(addBookingNumber(userInfo.telephone));
      dispatch(addBookingEmail(userInfo.email));
      await axios.post(
        "http://localhost:8000/bookings/create/",
        {
          name: userInfo.name,
          email: userInfo.email,
          telephone_number: userInfo.telephone,
          date: newbooking.date,
          guest_amount: newbooking.guest_amount,
          time: newbooking.time,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    }
  }

  function validateForm() {
    const { name, email, telephone } = userInfo;
    setValidateMsg([]);
    let messages = [];
    if (!name) {
      messages.push("Name is required");
    }
    if (!email) {
      messages.push("Email is required");
    }
    if (!telephone) {
      messages.push("Telephone number is required");
    }
    setValidateMsg(messages);
  }

  return (
    <main className=" h-5/6 grid grid-cols-7 p-3">
      <h1 className=" text-2xl  modal-title">Kundinformation</h1>
      <form action="" className=" modal-content gap-1">
        <div className="">
          <label htmlFor="name" className="">
            Namn
            <input
              type="text"
              name="name"
              placeholder="Namn"
              className=" border-2 border-black rounded-lg"
              value={userInfo.name}
              onChange={(e) => handleUserInput(e)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="email" className="">
            E-postadress
            <input
              type="email"
              name="email"
              placeholder="namn@exempel.se"
              className=" border-2 border-black rounded-lg"
              value={userInfo.email}
              onChange={(e) => handleUserInput(e)}
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="telephone" className="">
            Telefonnummer
            <input
              type="tel"
              name="telephone"
              placeholder="1234567028"
              className=" border-2 border-black rounded-lg"
              value={userInfo.telephone}
              onChange={(e) => handleUserInput(e)}
            />
          </label>
        </div>
        <div>
          {validateMsg.length > 0 && <span>Validation Summary</span>}
          <ul>
            {validateMsg.map((vm) => (
              <li key={vm} className="text-red-500">
                {vm}
              </li>
            ))}
          </ul>
        </div>
        <input
          className="cursor-pointer btn-green mt-4 w-36"
          type="submit"
          value="Skapa Bokning"
          onClick={(e) => handleClick(e)}
        />
      </form>
      <button
        className="cursor-pointer btn-red col-start-1 sm:col-start-3"
        onClick={() => {
          dispatch(addBookingTime(""));
        }}
      >
        Tillbaka
      </button>
    </main>
  );
}
export default BookingModalThree;
