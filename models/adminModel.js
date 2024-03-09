const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    admin_name: {
      type: String,
      required: [true, "please enter the field"],
    },
    password: {
      type: String,
      required: [true, "please enter the field"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("admins", adminSchema);
