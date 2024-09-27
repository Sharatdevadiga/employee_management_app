import { useParams } from "react-router";
import NewEmployee from "../components/NewEmployee";
import useCustomFetcher from "../hooks/useCustomFetcher";
import { BASE_URL, EMPLOYEES } from "../config/endpoints";
import { useEffect, useState } from "react";

function EditEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const { isLoading, customFetcher, error } = useCustomFetcher();

  async function fetchEmployee() {
    const { data } = await customFetcher(
      "GET",
      `${BASE_URL}${EMPLOYEES}/${id}`,
    );
    setEmployee(data.data);
  }

  useEffect(() => {
    fetchEmployee();
  }, []);

  if (error) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading...</div>;

  if (employee)
    return (
      <NewEmployee
        initialValues={employee}
        id={employee._id}
        method="PATCH"
      ></NewEmployee>
    );
}

export default EditEmployee;
