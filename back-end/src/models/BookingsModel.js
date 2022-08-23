const { Schema, model } = require("mongoose");

const bookingsSchema = new Schema(
  {
    guest_amount: Number,
    date: Date,
    time: String,
    name: String,
    email: String,
    telephone_number: Number,
  },
  {
    timestamps: true,
  }
);

const BookingsModel = model("bookings", bookingsSchema);

module.exports = BookingsModel;
