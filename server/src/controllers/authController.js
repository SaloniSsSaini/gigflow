import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User exists" });

  const user = await User.create({ name, email, password });
  generateToken(res, user._id);

  res.status(201).json({ user });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({ user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const logoutUser = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json({ message: "Logged out" });
};
