const express = require("express");
require("dotenv").config();
require("./mongoose");
const CustomersModel = require("./models/CustomersModel");
const BookingsModel = require("./models/BookingsModel");
const app = express();
app.use(express.json());

app.get("/admin", (res) => {
  res.send("hello");
});

// Clean MongoDB Data \\
app.delete("/removeAll", async (res) => {
  await BookingsModel.deleteMany({});
  await CustomersModel.deleteMany({});
  res.redirect("/bookings");
});

// CUSTOMER \\
// GET
app.get("/customers", async (res) => {
  try {
    const customer = await CustomersModel.find();
    res.send(customer);
    return;
  } catch (error) {
    res.send(err);
  }
});

// DELETE
app.delete("/customer/delete/:id", async (req, res) => {
  await BookingsModel.remove({ customer: req.params.id });

  await CustomersModel.findByIdAndDelete(req.params.id);
  res.redirect("/bookings");
});

// PUT
app.put("/customer/update/:id", async (req, res) => {
  const id = req.params.id;

  const customer = await CustomersModel.findOne({ _id: id });

  const { name, email, telephone_number } = req.body;

  customer.name = name;
  customer.email = email;
  customer.telephone_number = telephone_number;

  // If customer exists
  CustomersModel.findOne({ email }, async (err, cust) => {
    if (cust) {
      res.redirect("/customers");
      console.log("Error: email already exists");
    } else if (err) {
      console.log(err);
    } else {
      await customer.save();
      res.redirect("/customers");
    }
  });
});

// BOOKING \\
// GET
app.get("/bookings", async (res) => {
  try {
    const bookings = await BookingsModel.find({});
    res.send(bookings);
    return;
  } catch (error) {
    res.send(err);
  }
});

// POST
app.post("/booking/create", async (req, res) => {
  const {
    name,
    email,
    telephone_number,
    guest_amount,
    created_at,
    date,
    time,
  } = req.body;

  let Newcustomer = new CustomersModel({
    name: name,
    email: email,
    telephone_number: telephone_number,
  });

  // If customer exists
  CustomersModel.findOne({ email }, async (err, cust) => {
    if (cust) {
      res.redirect("/bookings");
      console.log("Error: email already exists");
    } else if (err) {
      console.log(err);
    } else {
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
      console.log("Booking created");
    }
  });
});

// DELETE
app.delete("/booking/delete/:id", async (req, res) => {
  await BookingsModel.findByIdAndDelete(req.params.id);
  res.redirect("/bookings");
});

// PUT
app.put("/booking/update/:id", async (req, res) => {
  const id = req.params.id;

  const booking = await BookingsModel.findOne({ _id: id });

  const { guest_amount, created_at, date, time } = req.body;

  booking.guest_amount = guest_amount;
  booking.created_at = created_at;
  booking.date = date;
  booking.time = time;

  await booking.save();
  res.redirect("/bookings");
});

app.listen(8000, () => console.log("server http://localhost:8000/bookings"));
