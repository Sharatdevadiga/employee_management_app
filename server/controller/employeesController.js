import Employee from "../models/employeeModel.js";

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course } = req.body;
    const img = req.file ? req.file.path : null; // The file path of the uploaded image

    // Check if employee already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(409).json({
        status: "fail",
        message: "Employee already exists, try different email",
      });
    }

    const newEmployee = await Employee.create({
      name,
      email,
      mobile,
      designation,
      gender,
      course,
      img,
    });
    res.status(201).json({
      status: "success",
      message: "Employee created successfully",
      data: newEmployee,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      status: "success",
      message: "Employees retrieved successfully",
      data: employees,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Get a single employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({
        status: "fail",
        message: "Employee not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Employee retrieved successfully",
      data: employee,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Update an employee by ID
const updateEmployee = async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course } = req.body;
    const img = req.file ? req.file.path : null; // The file path of the uploaded image

    // Update employee details
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, email, mobile, designation, gender, course, img },
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        status: "fail",
        message: "Employee not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Employee updated successfully",
      data: updatedEmployee,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Delete an employee by ID
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({
        status: "fail",
        message: "Employee not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Employee deleted successfully",
      data: [],
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Search employees by name
const searchEmployeesByName = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({
        status: "fail",
        message: "Search query is required",
      });
    }

    const employees = await Employee.find({
      name: { $regex: query, $options: "i" },
    });

    res.status(200).json({
      status: "success",
      message: "Employees retrieved successfully",
      data: employees,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  searchEmployeesByName,
};
