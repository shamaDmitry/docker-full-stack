import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import User from "./models/User";
import { authMiddleware } from "./middlewares/auth.middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ message: "1message from back-end" });
});

app.get("/api/test", authMiddleware, async (req, res) => {
  return res.json({ message: "sercer route" });
});

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
