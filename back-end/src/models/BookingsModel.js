const { Schema, model } = require("mongoose");

const bookingsSchema = new Schema({
  guest_amount: Number,
  created_at: String,
  customer: Object,
  date: Date,
  time: String,
});

const BookingsModel = model("bookings", bookingsSchema);

module.exports = BookingsModel;
