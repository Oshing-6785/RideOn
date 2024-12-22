const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const riderSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be atlest 3 characters"],
    },
    lastName: {
      type: String,
      minlength: (3)[(3, "Lastname mus be atleast 3 characters")],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [6, "Plate must be at least 6 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1 person"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle"],
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});


riderSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
};

riderSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

riderSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const riderModel = mongoose.model("rider", riderSchema);

module.exports = riderModel;