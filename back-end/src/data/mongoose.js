const mongoose = require("mongoose");
module.exports = mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
console.log("it works");