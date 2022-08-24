const { Schema, model } = require("mongoose");

const bookingsSchema = new Schema(
  {
    guest_amount: Number,
    date: String,
    time: String,
    name: String,
    email: String,
    telephone_number: String,
  },
  {
    timestamps: true,
  }
);

const BookingsModel = model("bookings", bookingsSchema);

module.exports = BookingsModel;
