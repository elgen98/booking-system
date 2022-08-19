const express = require("express");
require("dotenv").config();
require("./mongoose");
const CustomersModel = require("./models/CustomersModel");
const BookingsModel = require("./models/BookingsModel");
const { ObjectId } = require("mongodb");
const app = express();
app.use(express.json());

app.get("/admin", (req, res) => {
  res.send("hello");
});

// Customer
app.get("/customers", async (req, res) => {
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

// Create
app.post("/bookings/create", async (req, res) => {
  let { name, email, telephone_number, guest_amount, created_at, date, time } =
    req.body;

  // Om kunden redan finns - skapa inte dubletter

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
    customer: customer._id,
  });

  await NewBooking.save();
  res.redirect("/bookings");
});

// Delete
app.delete("/bookings/:id", async (req, res) => {
  await BookingsModel.findByIdAndDelete(req.params.id);
  res.redirect("/bookings");
});

app.delete("/customers/:id", async (req, res) => {
  await BookingsModel.remove({ customer: req.params.id });

  await CustomersModel.findByIdAndDelete(req.params.id);
  res.redirect("/bookings");
});

app.put("/bookings/update/:id", async (req, res) => {
  const id = req.params.id;

  const booking = await BookingsModel.findOne({ _id: id });

  const {
    name,
    email,
    telephone_number,
    guest_amount,
    created_at,
    date,
    time,
  } = req.body;

  booking.name = name;
  booking.email = email;
  booking.telephone_number = telephone_number;
  booking.guest_amount = guest_amount;
  booking.created_at = created_at;
  booking.date = date;
  booking.time = time;

  await booking.save();
  res.redirect("/bookings");
});

app.listen(8000, () => console.log("server http://localhost:8000/bookings"));
