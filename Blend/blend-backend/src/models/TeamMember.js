import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: true },
  photo: { type: String, required: true },
  socials: { type: Object, default: {} },
});

export default mongoose.model("Team", teamSchema);