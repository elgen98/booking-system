const express = require("express");
require("dotenv").config();
require("./mongoose");
const CustomersModel = require("./models/CustomersModel");
const BookingsModel = require("./models/BookingsModel");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// Customer
app.get("/customer", async (req, res) => {
  try {
    const customer = await CustomersModel.find();
    res.send(customer);
    return;
  } catch (error) {
    res.send(err);
  }
});

// Bookings
app.get("/bookings", async (req, res) => {
  try {
    const bookings = await BookingsModel.find({});
    res.send(bookings);
    return;
  } catch (error) {
    res.send(err);
  }
});

app.get("/bookings", async (req, res) => {
  const { id } = req.query;
  try {
    const booking = await BookingsModel.findOne({ _id: id });
    res.send(booking);
    return;
  } catch (error) {
    res.send(err);
  }
});

app.post("/bookings", async (req, res) => {
  console.log(req.body);
  let { name, email, telephone_number, guest_amount, created_at, date, time } =
    req.body;

  let Newcustomer = new CustomersModel({
    name: name,
    email: email,
    telephone_number: telephone_number,
  });

  let customer = await Newcustomer.save();

  const NewBooking = new BookingsModel({
    guest_amount: guest_amount,
    created_at: created_at,
    date: date,
    time: time,
    customerId: customer._id,
  });

  await NewBooking.save();
  res.redirect("/bookings");
});

app.listen(8000, () => console.log("server http://localhost:8000/"));
