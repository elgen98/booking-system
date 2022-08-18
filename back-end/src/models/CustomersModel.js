const { Schema, model } = require("mongoose");

const customersSchema = new Schema({
  name: String,
  email: String,
  number: Number,
});

const CustomersModel = model("customers", customersSchema);

module.exports = CustomersModel;
