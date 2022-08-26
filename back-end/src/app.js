require("dotenv").config();
require("./data/mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

// Routes
app.use("/bookings", bookRoute);

app.post("/searchAvailabilty", async (req, res, next) => {
  let arrOne = [];
  let arrTwo = [];
  let booleans = { seatingOne: true, seatingTwo: true };
  const data = req.body;
  console.log(data.data);
  const availableBookings = await BookingsModel.find({ date: data.date });
  console.log(availableBookings);
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
      console.log("1800: ", arrOne, "2100: ", arrTwo);
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

// Clean MongoDB Data \\
app.delete("/removeAll", async (req, res) => {
  await BookingsModel.deleteMany({});
  res.redirect("/");
  console.log("Removed all data");
});

app.listen(8000, () => console.log("server http://localhost:8000/"));
