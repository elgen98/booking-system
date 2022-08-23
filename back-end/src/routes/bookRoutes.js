require("dotenv").config();
require("../mongoose");
const express = require("express");
const BookingsModel = require("../models/BookingsModel");
const router = express.Router();
module.exports = router;

// BOOKINGS \\
// GET
router.get("/", async (err, res) => {
  try {
    const bookings = await BookingsModel.find({});
    res.send(bookings);
  } catch (error) {
    res.send(err);
  }
});

// GET one booking
router.get("/:id", async (req, res) => {
  const booking = await BookingsModel.findById(req.params.id);
  res.send(booking);
});

// POST
router.post("/create", async (req, res) => {
  const {
    name,
    email,
    telephone_number,
    guest_amount,
    created_at,
    date,
    time,
  } = req.body;

  const newBooking = new BookingsModel({
    guest_amount: guest_amount,
    created_at: created_at,
    date: date,
    time: time,
    name: name,
    email: email,
    telephone_number: telephone_number,
  });
  await newBooking.save();
  res.redirect("/");
  console.log("Booking created");
});

// DElETE
router.delete("/delete/:id", async (req, res) => {
  await BookingsModel.findByIdAndDelete(req.params.id);
  res.redirect("/");
  console.log("Booking removed");
});

// PUT
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;

  const booking = await BookingsModel.findOne({ _id: id });

  const {
    guest_amount,
    created_at,
    date,
    time,
    name,
    email,
    telephone_number,
  } = req.body;

  booking.guest_amount = guest_amount;
  booking.created_at = created_at;
  booking.date = date;
  booking.time = time;
  booking.name = name;
  booking.email = email;
  booking.telephone_number = telephone_number;

  await booking.save();
  res.redirect("/");
  console.log("Booking was updated");
});
