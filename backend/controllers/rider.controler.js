const riderModel = require("../models/rider.model");
const blackListModel = require("../models/blackList.model");
const riderService = require("../services/rider.service");
const { validationResult } = require("express-validator");

module.exports.registerRider = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, vehicle } = req.body;

  const isRiderAlreadyExist = await riderModel.findOne({ email });
  if (isRiderAlreadyExist) {
    return res.status(400).json({ message: "Rider already exists" });
  }

  const hashedPassword = await riderModel.hashPassword(password);

  const rider = await riderService.createRider({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = rider.generateAuthToken();
  res.status(201).json({ token, rider });
};

module.exports.loginRider = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const rider = await riderModel.findOne({ email }).select("+password");
  if (!rider) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const isMatch = await rider.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const token = rider.generateAuthToken();
  res.cookie("token", token);
  res.status(201).json({ token, rider });
};

module.exports.getRiderProfile = async (req, res, next) => {
  res.status(200).json({ rider: req.rider });
};

module.exports.logoutRider = async (req, res, next) => {
  res.clearCookie("token");
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);
  await blackListModel.create({token});
  return res.status(201).json({ message: "User logged out successfully" });
};
