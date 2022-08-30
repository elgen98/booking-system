require("dotenv").config();
require("./data/mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const BookingsModel = require("./models/BookingsModel");
const bookRoute = require("./routes/bookRoutes");

// Cors
// Accepts only the origin address
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/searchAvailabilty", async (req, res, next) => {
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
    if (arrOne.length >= 15) {
      booleans.seatingOne = false;
    }
    if (arrTwo.length >= 15) {
      booleans.seatingTwo = false;
    }
    res.send(booleans);
  }
});

// Routes
app.use("/bookings", bookRoute);

// Clean MongoDB Data \\
app.delete("/removeAll", async (req, res) => {
  await BookingsModel.deleteMany({});
  res.redirect("/");
  console.log("Removed all data");
});

app.listen(8000, () => console.log("server http://localhost:8000/"));
