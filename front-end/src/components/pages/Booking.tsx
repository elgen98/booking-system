import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArrayFromApi } from "../../redux/features/bookingSlice";
import { IState } from "../../redux/models/IState";
import DateAndGuest from "../DateAndGuest";

export default function Booking() {
  const bookings = useSelector((state: IState) =>
    JSON.stringify(state.booking.value)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:8000/bookings").then((response) => {
      console.log("data:", response.data);
      dispatch(addArrayFromApi(response.data));
    });
  }, []);

  return (
    <>
      <DateAndGuest />
      {bookings}
    </>
  );
}
