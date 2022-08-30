import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import BookingModalFour from "../BookingModals/BookingModalFour";
import BookingModalOne from "../BookingModals/BookingModalOne";
import BookingModalThree from "../BookingModals/BookingModalThree";
import BookingModalTwo from "../BookingModals/BookingModalTwo";

export default function Booking() {
  const [bookingProgress, setBookingProgress] = useState(0);

  const booking = useSelector((state: RootState) => state.bookings.value);

  useEffect(() => {
    if (booking.date === "" && booking.guest_amount === 0) {
      setBookingProgress(0);
    }
    if (booking.date !== "" && booking.guest_amount !== 0) {
      setBookingProgress(1);
    }
    if (booking.time !== "") {
      setBookingProgress(2);
    }
  }, [booking.date, booking.guest_amount, booking.time]);

  if (bookingProgress === 0) {
    return <BookingModalOne />;
  }
  if (bookingProgress === 1) {
    return <BookingModalTwo />;
  }
  if (bookingProgress === 2) {
    return <BookingModalThree />;
  }
  if (bookingProgress === 3) {
    return <BookingModalFour />;
  } else return <BookingModalOne />;
}
