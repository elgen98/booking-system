import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { HiX } from "react-icons/hi";
import { IBookings } from "../../Admin";

interface IAdminEdit {
  // Object
  editBooking: IBookings;
  // Boolean from state
  showUpdateForm: boolean;
  // Input handler
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  // Submit form function
  EditSubmit(e: ChangeEvent<HTMLFormElement>): void;
  // UseState
  setShowEditForm: Dispatch<SetStateAction<boolean>>;
  // Boolean from state
  validateEditMsg: string[];
}

function AdminEdit(props: IAdminEdit) {
  return (
    <>
      {props.showUpdateForm ? (
        <>
          <form
            className="relative w-[95%] md:w-[85%] m-auto mb-6 grid grid-cols-2 border border-gray-200 p-4 rounded-md gap-4"
            onSubmit={props.EditSubmit}
            id={props.editBooking._id.toString()}
          >
            <label className="col-span-2 lg:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">
                Format: Min = 2 characters
              </span>
              <input
                type="text"
                placeholder="bob"
                pattern="[a-ä]{2,}"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="name"
                onChange={props.handleChange}
                value={props.editBooking.name as string}
              />
            </label>

            <label className="col-span-2 lg:col-span-1 flex flex-col text-left ">
              <span className=" font-light text-sm mb-1">Format: s@s</span>
              <input
                type="email"
                placeholder="s@s"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="email"
                onChange={props.handleChange}
                value={props.editBooking.email as string}
              />
            </label>
            <label className="col-span-2 lg:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1"></span>
              <input
                placeholder="123-456-78-91"
                type="tel"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2 border-b-slate"
                name="telephone_number"
                onChange={props.handleChange}
                value={props.editBooking.telephone_number as string}
              />
            </label>

            <label className="col-span-2 lg:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">
                Format: Min = 1, Max = 6
              </span>
              <input
                type="number"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="guest_amount"
                placeholder="6"
                min={"1"}
                max={"6"}
                onChange={props.handleChange}
                value={props.editBooking.guest_amount as number}
              />
            </label>

            <label className="col-span-2 md:col-span-1 flex flex-col text-left">
              <input
                type="text"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="time"
                onChange={props.handleChange}
                value={props.editBooking.time as string}
              />
            </label>
            <label className="col-span-2 md:col-span-1 flex flex-col text-left">
              <span className=" font-light text-sm mb-1">Datum</span>
              <input
                type="date"
                className="border-solid border-2 border-sky-500 rounded-md py-2 px-2"
                name="date"
                onChange={props.handleChange}
                value={props.editBooking.date as string}
              />
            </label>

            <input
              type="submit"
              value={"Spara"}
              className="cursor-pointer col-span-2 py-4 bg-slate-100 border border-gray-200 rounded-md"
            />

            <button
              className="cursor-pointer absolute right-0 bg-red-500 text-white rounded-md"
              onClick={() => props.setShowEditForm(false)}
            >
              <HiX />
            </button>
          </form>
          <div>
            {props.validateEditMsg.length > 0 && (
              <span>Validation Summary</span>
            )}
            <ul>
              {props.validateEditMsg.map((vm) => (
                <li key={vm} className="text-red-500">
                  {vm}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default AdminEdit;
