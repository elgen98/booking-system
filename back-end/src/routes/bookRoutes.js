require("dotenv").config();
require("../data/mongoose");
const express = require("express");
const BookingsModel = require("../models/BookingsModel");
const router = express.Router();
const nodemailer = require("nodemailer");

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
router.post("/searchAvailabilty", async (req, res) => {
  //Arrays representing the two seating periods: 21:00 and 18:00
  let arrOne = [];
  let arrTwo = [];
  //Booleans object that gets sent back to client
  let booleans = { seatingOne: true, seatingTwo: true };
  //Data from client and the bookings matching that date
  const data = req.body;
  const availableBookings = await BookingsModel.find({ date: data.date });
  //Validation
  if (availableBookings.length === 0) {
    res.send(booleans);
  } else {
    for (let i = 0; i < availableBookings.length; i++) {
      if (availableBookings[i].time === "1800") {
        arrOne.push("booking");
      }
      if (availableBookings[i].time === "2100") {
        arrTwo.push("booking");
      }
    }
    if (arrOne.length >= 0) {
      booleans.seatingOne = false;
    }
    if (arrTwo.length >= 0) {
      booleans.seatingTwo = false;
    }
    res.send(booleans);
  }
});

router.post("/create", async (req, res) => {
  const { name, email, telephone_number, guest_amount, date, time } = req.body;

  const newBooking = new BookingsModel({
    guest_amount: guest_amount,
    date: date,
    time: time,
    name: name,
    email: email,
    telephone_number: telephone_number,
  });
  let booking = await newBooking.save();

  console.log(booking);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "charles.krook@gmail.com",
      pass: "eqdopsssoderxeoa",
    },
  });

  res.status(200).send("New Booking added");
  var mailOptions = {
    from: "vuxenjuice@gmail.com",
    to: email,
    subject: "Booking Confirmation for order " + booking._id,
    text:
      "Hello " +
      name +
      "! We welcome you to Cena at " +
      time +
      "o'clock on the " +
      date +
      ". Where a table of " +
      guest_amount +
      " will be waiting for you. To cancel your reservation, please follow the link: http://localhost:8000/bookings/cancel/" +
      booking._id,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

// DElETE
router.delete("/delete/:id", async (req, res) => {
  await BookingsModel.findByIdAndDelete(req.params.id);
  res.status(200).send("Booking removed");
  console.log("Booking removed");
});

router.get("/cancel/:id", async (req, res) => {
  await BookingsModel.findByIdAndDelete(req.params.id);
  res.status(200).redirect("http://localhost:3000/success");
  console.log("Booking removed");
});

// PUT
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;

  const booking = await BookingsModel.findOne({ _id: id });

  const { guest_amount, date, time, name, email, telephone_number } = req.body;

  booking.guest_amount = guest_amount;
  booking.date = date;
  booking.time = time;
  booking.name = name;
  booking.email = email;
  booking.telephone_number = telephone_number;

  await booking.save();
  res.status(200).send("Booking updated.");
  console.log("Booking was updated");
});
