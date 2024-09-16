import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  proffesion: {
    type: String,
    default: "student",
  },
});

export default mongoose.model("users", userSchema);
