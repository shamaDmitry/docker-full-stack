import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User";

const router = Router();

// Register
router.post("/register", async (req, res) => {
  const { email, password, userName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({ email, userName, password: hashed });

  await user.save();

  return res.status(201).json({
    message: "User created",
    token: "token",
    user: { id: user._id, email: user.email },
  });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password || ""))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "", {
    expiresIn: "1d",
  });

  return res.json({
    message: "User logged in",
    token,
    user: { id: user._id, email: user.email, userName: user.userName },
  });
});

export default router;
