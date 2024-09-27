import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Please provide your name"],
    },
    password: {
      type: String,
      required: [true, "please provide a valid password"],
      minLength: 8,
      select: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const User = mongoose.model("User", userSchema);
export default User;
