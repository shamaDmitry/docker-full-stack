import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
