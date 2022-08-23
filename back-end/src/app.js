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

// Routes
app.use("/bookings", bookRoute);

// Clean MongoDB Data \\
app.delete("/removeAll", async (req, res) => {
  await BookingsModel.deleteMany({});
  res.redirect("/");
  console.log("Removed all data");
});

app.listen(8000, () => console.log("server http://localhost:8000/"));
