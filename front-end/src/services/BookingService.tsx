import axios from "axios";
import { IBooking } from "../models/IBooking";

export default class BookingService {
  async getBookings(): Promise<IBooking[]> {
    const response = await axios.get<IBooking[]>(
      "https://localhost:8000/bookings"
    );

    return response.data;
  }
}
