const riderController = require("../controllers/rider.controler");
const authMiddleware = require("../middlewares/auth.middleware");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");


router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must be at least 8 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Vehicle color must be at least 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 6 })
      .withMessage("Vehicle plate must be at least 6 characters"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle capacity must be atleast 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle"])
      .withMessage("Invalid vehicle type"),
  ],
  riderController.registerRider
);

router.post("/login", [
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
], riderController.loginRider);

router.get("/profile",authMiddleware.authRider, riderController.getRiderProfile)

router.get("/logout", authMiddleware.authRider,riderController.logoutRider)


module.exports = router;
