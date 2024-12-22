const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
connectToDb();
const userRoutes = require("./routes/user.routes");
const riderRoutes = require("./routes/rider.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello im responding from url /...");
});

app.use("/users", userRoutes);
app.use("/riders", riderRoutes);

module.exports = app;
