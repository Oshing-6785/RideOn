const userModel = require("../models/user.model");
const blackListTokenModel = require("../models/blackList.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const riderModel = require("../models/rider.model");

module.exports.authUser = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization?.split(" ")[1]);
  // console.log("Extracted Token:", token); // debugging to log the token
  if (!token) {
    // console.log("Token not provided."); // debugging if token is missing or not

    return res.status(401).json({ message: "Unauthorized Access" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", decoded); // debugging if token is generated or not
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};

module.exports.authRider = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization?.split(" ")[1]);
    // console.log("Extracted Token:", token); // debugging to log the token
  if (!token) {
    // console.log("Token not provided."); // debugging if token is missing or not
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });
  // console.log("Blacklisted Token:", isBlacklisted);

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", decoded); // debugging if token is generated or not

    const rider = await riderModel.findById(decoded._id);
    req.rider = rider;
    return next();
  } catch (error) {
    // console.log(error); 
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};


