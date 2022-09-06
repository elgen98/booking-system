import { HiX } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";
import { IBookings } from "../../Admin";
import { Dispatch, SetStateAction } from "react";

interface IAdminPrint {
  bookings: IBookings[];
  removeBooking(e: any, id: string): void;
  editCurrBook(id: string): void;
  setShowEditForm: Dispatch<SetStateAction<boolean>>;
}

function AdminPrint(props: IAdminPrint) {
  return (
    <>
      <div className=" col-span-3">
        <div className="">
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
            {props.bookings.map((booking) => (
              <div
                key={booking._id.toString()}
                className="bg-blue-50 border border-blue-300 p-4 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <p>{booking.date}</p>
                  <p className=" text-right">
                    {booking.time.slice(0, 2) + ":" + booking.time.slice(2, 4)}
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
                    onClick={(e) =>
                      props.removeBooking(e, booking._id.toString())
                    }
                    id={booking._id.toString()}
                    className="flex items-center cursor-pointer bg-red-100 border-red-300 rounded-md p-1"
                  >
                    Remove
                    <HiX />
                  </button>

                  <button
                    className="flex items-center cursor-pointer bg-green-100 rounded-md p-1"
                    onClick={() => {
                      props.setShowEditForm(true);
                      props.editCurrBook(booking._id.toString());
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
    </>
  );
}

export default AdminPrint;
