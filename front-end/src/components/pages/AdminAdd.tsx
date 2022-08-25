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
          <form onSubmit={props.AddSubmit}>
            <div>
              <label>
                Namn
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="name"
                  onChange={props.handleAdd}
                />
              </label>

              <label>
                Email
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="email"
                  onChange={props.handleAdd}
                />
              </label>

              <label>
                Nummer
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="telephone_number"
                  onChange={props.handleAdd}
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
                  onChange={props.handleAdd}
                />
              </label>

              <label>
                Tid
                <input
                  type="text"
                  className="border-solid border-2 border-sky-500"
                  name="time"
                  onChange={props.handleAdd}
                />
              </label>

              <label>
                Datum
                <input
                  type="date"
                  className="border-solid border-2 border-sky-500"
                  name="date"
                  onChange={props.handleAdd}
                />
              </label>
            </div>
            <button type="submit">Submit</button>
            <br />
            <button
              onClick={() => setShowAddForm(false)}
              className="cursor-pointer"
            >
              Close
            </button>
          </form>
        </>
      ) : (
        <>
          <button
            onClick={() => setShowAddForm(true)}
            className="cursor-pointer"
          >
            Add booking
          </button>
        </>
      )}
    </>
  );
}
export default AdminAdd;
