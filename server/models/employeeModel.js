import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the Employee Schema
const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please provide a valid email address"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^\d{10}$/, "Please provide a valid 10-digit mobile number"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
      enum: {
        values: ["HR", "Manager", "Sales"],
        message: "Invalid designation. Must be either HR, Manager, or Sales",
      },
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["M", "F"],
        message: "Gender must be either M (Male) or F (Female)",
      },
    },
    course: {
      type: [String], // Keep as array if employee can enroll in multiple courses
      required: [true, "Course is required"],
      enum: {
        values: ["MCA", "BCA", "BSC"],
        message: "Invalid course. Must be either MCA, BCA, or BSC",
      },
    },
    img: {
      type: String, // Optional image path
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
