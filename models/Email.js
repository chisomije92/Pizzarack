import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    maxlength: 100,
  },
});

export default mongoose.models.Email || mongoose.model("Email", EmailSchema);
