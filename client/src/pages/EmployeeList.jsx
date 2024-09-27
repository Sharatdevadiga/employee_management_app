import { useEffect, useState } from "react";
import useCustomFetcher from "../hooks/useCustomFetcher";
import { BASE_URL, EMPLOYEES } from "../config/endpoints";
import Thead from "../components/Employees/Thead";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Track search input
  const { isLoading, customFetcher, error } = useCustomFetcher();
  const { isLoading: isDeleting, customFetcher: deleteFetcher } =
    useCustomFetcher();

  async function fetchEmployees() {
    const { data } = await customFetcher("GET", `${BASE_URL}${EMPLOYEES}`);
    if (data) {
      setEmployees(data.data);
    }
  }

  // Delete employee
  async function handleDelete(employeeId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );
    if (!confirmDelete) return;

    const { data, error } = await deleteFetcher(
      "DELETE",
      `${BASE_URL}${EMPLOYEES}/${employeeId}`,
    );

    if (data && data.status === "success") {
      // Remove the deleted employee from the state
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== employeeId),
      );
      toast.success("Employee deleted successfully");
    } else if (error) {
      toast.error(`Failed to delete employee: ${error}`);
    }
  }

  // Filter employees based on the search term
  const filteredEmployees = employees.filter((employee) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchLower) ||
      employee.email.toLowerCase().includes(searchLower) ||
      employee.mobile.toLowerCase().includes(searchLower)
    );
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (error) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="mb-4 text-2xl font-bold">Employee List</h2>
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search state
        placeholder="Enter Search Keyword"
        className="mb-6 w-full rounded border border-purple-200 bg-black p-2 shadow-sm"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg shadow-md">
          <Thead />
          <tbody className="divide-gray-200 divide-y">
            {filteredEmployees.map((employee) => (
              <tr
                key={employee._id}
                className="h-24 border-none shadow-sm shadow-purple-500"
              >
                <td className="p-4">{employee._id}</td>
                <td className="p-4">{/* Image goes here */}</td>
                <td className="p-4">{employee.name}</td>
                <td className="p-4">{employee.email}</td>
                <td className="p-4">{employee.mobile}</td>
                <td className="p-4">{employee.designation}</td>
                <td className="p-4">
                  {employee.gender === "M" ? "Male" : "Female"}
                </td>
                <td className="p-4">{employee.course.join(", ")}</td>
                <td className="p-4">
                  {new Date(employee.createdAt).toLocaleDateString()}
                </td>
                <td className="mt-4 flex space-x-2 p-4">
                  <NavLink
                    to={`/employee/${employee._id}`}
                    className="rounded-md border border-blue-600 px-2 py-1 text-sm hover:bg-blue-950"
                  >
                    Edit
                  </NavLink>
                  <button
                    className="rounded-md border border-red-600 px-2 py-1 text-sm hover:bg-red-950"
                    onClick={() => handleDelete(employee._id)}
                    disabled={isDeleting}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* No results message */}
        {filteredEmployees.length === 0 && (
          <p className="mt-4 text-center">No employees found.</p>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
