import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookingEmail,
  addBookingName,
  addBookingNumber,
} from "../../features/BookingSlice";

function BookingModalTwo() {
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
    <>
      <h1>Modal Two</h1>
      <h1>Kundinformation</h1>
      <form action="" className="">
        <div className="">
          <div className="">
            <label htmlFor="name" className="">
              Namn
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=""
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
                placeholder="name@example.se"
                className=""
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
                className=""
                value={userInfo.telephone}
                onChange={(e) => handleUserInput(e)}
              />
            </label>
          </div>
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
          className="cursor-pointer "
          type="submit"
          value="Spara"
          onClick={(e) => handleClick(e)}
        />
        <br />
        <button className="cursor-pointer ">Avbryt</button>
      </form>
    </>
  );
}
export default BookingModalTwo;
