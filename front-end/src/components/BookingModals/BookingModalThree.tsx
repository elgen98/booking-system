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
    GDPR: false,
  });

  const [validateMsg, setValidateMsg] = useState([""]);
  const [show, setShow] = useState(false);

  const newbooking = useSelector((state: RootState) => state.bookings.value);

  function handleUserInput(e: ChangeEvent<HTMLInputElement>) {
    // handle user input
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }

  async function handleClick(e: MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    if (validateMsg.length <= 0) {
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
    } else setShow(!show);
  }

  useEffect(() => {
    const { name, email, telephone, GDPR } = userInfo;
    setValidateMsg([]);
    let messages = [];
    if (!name) {
      messages.push("Name is required");
    }
    if (!email) {
      messages.push("Email is required");
    }
    if (email.includes("@") === false) {
      messages.push("Email is not valid");
    }
    if (!telephone) {
      messages.push("Telephone number is required");
    }
    if (GDPR === false) {
      messages.push("You need to accept the terms and conditions");
    }
    setValidateMsg(messages);
  }, [userInfo]);

  return (
    <main className=" modal-wrapper">
      <div className="modal-title mb-10">
        <img
          src="../assets/ProgressBar3.png"
          alt="progressBar"
          className="hidden sm:block"
        />
        <img
          src="../assets/ProgressBar3Mobile.png"
          alt="progressBar"
          className=" sm:hidden"
        />
      </div>
      <form
        action=""
        className=" modal-content gap-1 sm:gap-5 row-start-1 row-end-5"
      >
        <h1 className="hidden sm:block text-xl sm:text-2xl font-bold">
          Kundinformation
        </h1>
        <div className=" sm:w-1/4">
          <label htmlFor="name" className=" block sm:text-xl">
            Namn
          </label>
          <input
            type="text"
            name="name"
            placeholder="Namn"
            className=" border-2 border-black rounded-lg sm:w-full"
            value={userInfo.name}
            onChange={(e) => handleUserInput(e)}
          />
        </div>
        <div className="sm:w-1/4">
          <label htmlFor="email" className="block sm:text-xl">
            E-postadress
          </label>
          <input
            type="email"
            name="email"
            placeholder="namn@exempel.se"
            className=" border-2 border-black rounded-lg sm:w-full"
            value={userInfo.email}
            onChange={(e) => handleUserInput(e)}
          />
        </div>
        <div className="sm:w-1/4">
          <label htmlFor="telephone" className="block sm:text-xl">
            Telefonnummer
          </label>
          <input
            type="tel"
            name="telephone"
            placeholder="1234567028"
            className=" border-2 border-black rounded-lg sm:w-full"
            value={userInfo.telephone}
            onChange={(e) => handleUserInput(e)}
          />
        </div>
        <div className="sm:w-3/4 text-sm sm:text-base">
          <label htmlFor="GDPR">
            Acceptera villkoren och att information samlas enligt GDPR
          </label>
          <input
            type="checkbox"
            name="GDPR"
            onClick={() => {
              if (userInfo.GDPR === false) {
                setUserInfo({ ...userInfo, GDPR: true });
              } else {
                setUserInfo({ ...userInfo, GDPR: false });
              }
            }}
          />
        </div>
        <div>
          {show && (
            <ul>
              {validateMsg.map((vm) => (
                <li key={vm} className="text-red-500 text-sm">
                  {vm}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
      <button
        className="cursor-pointer btn-red col-span-4 sm:col-start-3 sm:col-span-2"
        onClick={() => {
          dispatch(addBookingTime(""));
        }}
      >
        Tillbaka
      </button>
      <input
        className="cursor-pointer btn-green col-span-4 sm:col-span-2"
        type="submit"
        value="Skapa Bokning"
        onClick={(e) => handleClick(e)}
      />
    </main>
  );
}
export default BookingModalThree;
