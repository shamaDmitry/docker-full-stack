import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import User from "./models/User";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/test", async (req, res) => {
  try {
    const user = await User.create({
      email: "test@example.com",
      password: "123456",
    });
    res.json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
});

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
