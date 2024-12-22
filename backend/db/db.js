const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Sucessfully connected to database");
    })
    .catch((error) => {
      console.log("Error to connect with database");
    });
}

module.exports = connectToDb;
