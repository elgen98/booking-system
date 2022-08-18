const express = require("express");
require("dotenv").config();
require("./mongoose");
const CustomersModel = require("./models/CustomersModel");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

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

// app.post("/customer", async (req, res) => {
//   let { name, email, number } = req.body;

//   let customer = new CustomersModel({
//     name: name,
//     email: email,
//     number: number,
//   });

// });

app.listen(8000, () => console.log("server http://localhost:8000/"));
