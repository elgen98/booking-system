import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

function BookingModalTwo() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    telephone: "",
  });
  const [validateMsg, setValidateMsg] = useState([""]);
  const [goodValidate, setGoodValidate] = useState(false);

  function handleUserInput(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  }

  function handleClick(e: MouseEvent<HTMLInputElement>) {
    validateForm();
    if (validateMsg.length > 0) {
      e.preventDefault();
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
          <div className="">
            <textarea
              name=""
              cols={20}
              rows={9}
              placeholder="Frågor, önskemål eller allergier"
              className=""
            ></textarea>
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
      <br />
    </>
  );
}

export default BookingModalTwo;
