const { Schema, model, Types } = require("mongoose");

const customersSchema = Schema({
  name: String,
  email: String,
  telephone_number: Number,
});

const CustomersModel = model("customers", customersSchema);

module.exports = CustomersModel;
