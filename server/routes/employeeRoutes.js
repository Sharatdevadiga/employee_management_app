import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeesController.js";
import upload from "../utils/upload.js";
import { protect } from "../middlewares/jwtVerification.js";

const employeeRouter = express.Router();

// Protect all routes
employeeRouter.use(protect);
employeeRouter.get("/", getEmployees);
employeeRouter.post("/", upload.single("img"), createEmployee);
employeeRouter.get("/:id", getEmployeeById);
employeeRouter.patch("/:id", upload.single("img"), updateEmployee);
employeeRouter.delete("/:id", deleteEmployee);

export default employeeRouter;
