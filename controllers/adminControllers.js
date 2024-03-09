const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { admin_name, password } = req.body;
  if (!admin_name || !password) {
    res.status(400);
    throw new Error("all fields are manditory");
  }
  const checkAdmin = await Admin.findOne({ admin_name });
  if (checkAdmin) {
    res.status(401);
    throw new Error("admin with entered email already exists");
  }
  const encryptPassword = await bcrypt.hash(password, 10);
  const user = await Admin.create({
    admin_name: admin_name,
    password: encryptPassword,
  });
  if (user) {
    res.status(200).json(user);
  } else {
    throw new Error("invalid details entered");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { admin_name, password } = req.body;
  if (!admin_name || !password) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }
  const user = await Admin.findOne({ admin_name });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          admin_name: user.admin_name,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30d" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("invalid username or password");
  }
});

module.exports = { registerUser, loginUser };
