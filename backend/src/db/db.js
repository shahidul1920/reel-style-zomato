const mongoose = require("mongoose");

function connectDB() {
   mongoose.connect("mongodb://localhost:27017/namNam")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
}
module.exports = connectDB;