const { Schema, model } = require("mongoose");

const bookingsSchema = new Schema({
  guest_amount: Number,
  created_at: Date,
  customer: { type: Schema.Types.ObjectId, ref: "customers" },
  date: Date,
  time: Number,
});

const BookingsModel = model("bookings", bookingsSchema);

module.exports = BookingsModel;
