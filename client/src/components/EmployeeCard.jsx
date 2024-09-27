/* eslint-disable react/prop-types */
const EmployeeCard = ({ employee }) => {
  return (
    <div className="border-gray-300 mb-4 flex items-center rounded border p-4 shadow-md">
      <div className="flex-shrink-0">
        {/* Replace with an actual image URL or leave empty */}
        <img
          src={employee.img || "placeholder.jpg"} // Placeholder image
          alt={employee.name}
          className="mr-4 h-16 w-16 rounded-full"
        />
      </div>
      <div className="flex flex-grow">
        <h3 className="text-xl font-semibold">{employee.name}</h3>
        <p className="text-gray-600">Email: {employee.email}</p>
        <p className="text-gray-600">Mobile No: {employee.mobile}</p>
        <p className="text-gray-600">Designation: {employee.designation}</p>
        <p className="text-gray-600">
          Gender: {employee.gender === "M" ? "Male" : "Female"}
        </p>
        <p className="text-gray-600">Course: {employee.course.join(", ")}</p>
        <p className="text-gray-600">
          Created At: {new Date(employee.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <button className="mb-2 text-blue-600">Edit</button>
        <button className="text-red-400">Delete</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
