// require("dotenv").config();
// require("../mongoose");
// const express = require("express");
// const BookingsModel = require("../models/BookingsModel");
// const CustomersModel = require("../models/CustomersModel");
// const router = express.Router();
// module.exports = router;

// // CUSTOMERS \\
// // GET
// router.get("/", async (err, res) => {
//   try {
//     const customer = await CustomersModel.find();
//     res.send(customer);
//   } catch (error) {
//     res.send(err);
//   }
// });

// // DELETE
// router.delete("/delete/:id", async (req, res) => {
//   await BookingsModel.deleteOne({ customer: req.params.id });
//   await CustomersModel.findByIdAndDelete(req.params.id);
//   res.redirect("/");
//   console.log("Customer removed", req.params.id);
// });

// // PUT
// router.put("/update/:id", async (req, res) => {
//   const id = req.params.id;

//   const customer = await CustomersModel.findOne({ _id: id });
//   const { name, email, telephone_number } = req.body;

//   customer.name = name;
//   customer.email = email;
//   customer.telephone_number = telephone_number;

//   // If customer exists
//   CustomersModel.findOne({ email }, async (err, cust) => {
//     if (cust) {
//       res.redirect("/");
//       console.log("Error: email already exists");
//     } else if (err) {
//       console.log(err);
//     } else {
//       await customer.save();
//       res.redirect("/");
//       console.log("Customer updated", id);
//     }
//   });
// });
