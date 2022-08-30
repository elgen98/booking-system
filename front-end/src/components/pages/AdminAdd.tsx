import { ChangeEvent, useState } from "react";

interface IAdminAdd {
  AddSubmit(e: ChangeEvent<HTMLFormElement>): void;
  handleAdd(e: ChangeEvent<HTMLInputElement>): void;
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
                <label>
                  <input
                    type="text"
                    placeholder="Namn"
                    className="border-solid border-2 border-sky-500"
                    name="name"
                    onChange={props.handleAdd}
                  />
                </label>

                <label>
                  <input
                    placeholder="Email"
                    type="text"
                    className="border-solid border-2 border-sky-500"
                    name="email"
                    onChange={props.handleAdd}
                  />
                </label>

                <label>
                  <input
                    placeholder="Nummer"
                    type="text"
                    className="border-solid border-2 border-sky-500"
                    name="telephone_number"
                    onChange={props.handleAdd}
                  />
                </label>

                <label>
                  <input
                    placeholder="Gäster"
                    type="number"
                    className="border-solid border-2 border-sky-500"
                    name="guest_amount"
                    onChange={props.handleAdd}
                  />
                </label>

                <label>
                  <input
                    placeholder="Tid"
                    type="text"
                    className="border-solid border-2 border-sky-500"
                    name="time"
                    onChange={props.handleAdd}
                  />
                </label>

                <label>
                  <input
                    placeholder="Datum"
                    type="date"
                    className="border-solid border-2 border-sky-500"
                    name="date"
                    onChange={props.handleAdd}
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
