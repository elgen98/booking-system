require("dotenv").config();
require("../mongoose");
const express = require("express");
const BookingsModel = require("../models/BookingsModel");
const CustomersModel = require("../models/CustomersModel");
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

// POST
router.post("/create", async (req, res) => {
  const { name, email, telephone_number, guest_amout, created_at, date, time } =
    req.body;

  let newCustomer = new CustomersModel({
    name: name,
    email: email,
    telephone_number: telephone_number,
  });

  // If customer exists
  CustomersModel.findOne({ email }, async (err, cust) => {
    if (cust) {
      res.redirect("/");
      console.log("Error: email already exists");
    } else if (err) {
      console.log(err);
    } else {
      const customer = await newCustomer.save();

      const newBooking = new BookingsModel({
        guest_amount: guest_amout,
        created_at: created_at,
        date: date,
        time: time,
        customer: customer._id,
      });
      await newBooking.save();
      res.redirect("/");
      console.log("Booking created", req.params.id);
    }
  });
});

// DElETE
router.delete("/delete/:id", async (req, res) => {
  await BookingsModel.findByIdAndDelete(req.params.id);
  res.redirect("/");
  console.log("Booking removed", req.params.id);
});

// PUT
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;

  const booking = await BookingsModel.findOne({ _id: id });

  const { guest_amount, created_at, date, time } = req.body;

  booking.guest_amount = guest_amount;
  booking.created_at = created_at;
  booking.date = date;
  booking.time = time;

  await booking.save();
  res.redirect("/");
  console.log("Booking was updated", req.params.id);
});
