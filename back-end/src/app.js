const express = require("express");
require("dotenv").config();
require("./mongoose");
const CustomersModel = require("./models/CustomersModel");
const BookingsModel = require("./models/BookingsModel");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// Customer
app.get("/customer", async (req, res) => {
  try {
    const customer = await CustomersModel.find();
    // res.send("Customers", customer);
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

app.post("/booking", async (req, res) => {
  let {
    name,
    email,
    telephone_number,
    guest_amount,
    created_at,
    customer,
    date,
    time,
  } = req.body;
});

app.listen(8000, () => console.log("server http://localhost:8000/"));
