import { ChangeEvent, useState } from "react";
import { IBookings } from "../../Admin";

interface IAdminAdd {
  // Submit form function
  AddSubmit(e: ChangeEvent<HTMLFormElement>): void;
  // Input handler function
  handleAdd(e: ChangeEvent<HTMLInputElement>): void;
  // Object
  createBooking: IBookings;
  // Boolean from state
  validateAddMsg: string[];
}

function AdminAdd(props: IAdminAdd) {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <>
      {showAddForm ? (
        <>
          <div className="">
            <form onSubmit={props.AddSubmit}>
              <div className="flex flex-col gap-2 p-4 rounded-md">
                <label htmlFor="name">
                  <span className=" font-light text-sm mb-1">
                    Format: Min = 2 characters
                  </span>
                  <input
                    type="text"
                    placeholder="Bob"
                    pattern="[a-ä]{2,}"
                    className="border-solid border-2 border-sky-500"
                    name="name"
                    value={props.createBooking.name as string}
                    onChange={(e) => props.handleAdd(e)}
                  />
                </label>

                <label htmlFor="email">
                  <span className=" font-light text-sm mb-1">Format: s@s</span>
                  <input
                    placeholder="s@s"
                    type="email"
                    className="border-solid border-2 border-sky-500"
                    name="email"
                    value={props.createBooking.email as string}
                    onChange={(e) => props.handleAdd(e)}
                  />
                </label>

                <label htmlFor="telephone_number">
                  <span className=" font-light text-sm mb-1">
                    {/* Format: 123-456-78-91 */}
                  </span>
                  <input
                    placeholder="123-456-78-91"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    type="tel"
                    className="border-solid border-2 border-sky-500"
                    name="telephone_number"
                    value={props.createBooking.telephone_number as string}
                    onChange={(e) => props.handleAdd(e)}
                  />
                </label>

                <label htmlFor="guest_amount">
                  <span className=" font-light text-sm mb-1">
                    Format: Min = 1, Max = 6
                  </span>
                  <input
                    placeholder="6"
                    type="number"
                    className="border-solid border-2 border-sky-500"
                    min={"1"}
                    max={"6"}
                    name="guest_amount"
                    value={props.createBooking.guest_amount as number}
                    onChange={(e) => props.handleAdd(e)}
                  />
                </label>
                <label htmlFor="time">
                  {/* <span className=" font-light text-sm mb-1">
                    Format: 18 or 21
                  </span> */}
                  <input
                    placeholder="18"
                    type="text"
                    className="border-solid border-2 border-sky-500"
                    name="time"
                    // pattern="([1]{1}[8]{1})||([2]{1}[1]{1})"
                    defaultValue={props.createBooking.time as string}
                    onChange={(e) => props.handleAdd(e)}
                  />
                </label>
                <label htmlFor="date">
                  <input
                    placeholder="Datum"
                    type="date"
                    className="border-solid border-2 border-sky-500"
                    name="date"
                    value={props.createBooking.date as string}
                    onChange={(e) => props.handleAdd(e)}
                  />
                </label>
                <div className="grid grid-cols-2 gap-4 p-4">
                  <button
                    type="submit"
                    className="cursor-pointer bg-white color-white py-1 px-4 rounded-md"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="cursor-pointer bg-white color-white py-1 px-4"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
            <div>
              {props.validateAddMsg.length > 0 && (
                <span>Validation Summary</span>
              )}
              <ul>
                {props.validateAddMsg.map((vm) => (
                  <li key={vm} className="text-red-500">
                    {vm}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <button
              onClick={() => setShowAddForm(true)}
              className="cursor-pointer bg-green-200  w-full rounded-md hover:bg-green-300"
            >
              Add booking
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default AdminAdd;
