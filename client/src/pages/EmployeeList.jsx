import { useEffect, useState } from "react";
import useCustomFetcher from "../hooks/useCustomFetcher";
import { BASE_URL, EMPLOYEES } from "../config/endpoints";
import EmployeeCard from "../components/EmployeeCard";
import Thead from "../components/Employees/Thead";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const { isLoading, customFetcher, error } = useCustomFetcher();

  async function fetchEmployees() {
    const { data, error } = await customFetcher(
      "GET",
      `${BASE_URL}${EMPLOYEES}`,
    );
    if (data) {
      setEmployees(data.data);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="mb-4 text-2xl font-bold">Employee List</h2>
      <input
        type="text"
        placeholder="Enter Search Keyword"
        className="mb-6 w-full rounded border border-purple-200 bg-black p-2 shadow-sm"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg shadow-md">
          <Thead />
          <tbody className="divide-gray-200 divide-y">
            {employees.map((employee, index) => (
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
                <td className="flex space-x-2 p-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
