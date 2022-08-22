require("dotenv").config();
require("./mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const CustomersModel = require("./models/CustomersModel");
const BookingsModel = require("./models/BookingsModel");
const bookRoute = require("./routes/bookRoutes");
const customRoute = require("./routes/customerRoutes");

app.get("/", (req, res) => {
  res.send("hello");
});

// Routes
app.use("/bookings", bookRoute);
app.use("/customers", customRoute);

// Clean MongoDB Data \\
app.delete("/removeAll", async (req, res) => {
  await BookingsModel.deleteMany({});
  await CustomersModel.deleteMany({});
  res.redirect("/");
  console.log("Removed all data");
});

app.listen(8000, () => console.log("server http://localhost:8000/"));
