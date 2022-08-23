const { Schema, model } = require("mongoose");

const bookingsSchema = new Schema({
  guest_amount: Number,
  created_at: Date,
  date: Date,
  time: String,
  name: String,
  email: String,
  telephone_number: Number,
});

const BookingsModel = model("bookings", bookingsSchema);

module.exports = BookingsModel;
