import { FaUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoCreateSharp } from "react-icons/io5";
import NavItem from "./NavItem";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import { LOGOUT, BASE_URL } from "../../config/endpoints";
import useCustomFetcher from "../../hooks/useCustomFetcher";

function Navigation() {
  const navigate = useNavigate();
  const { customFetcher } = useCustomFetcher();

  // Logout function
  async function handleLogout() {
    const { data, error } = await customFetcher("GET", `${BASE_URL}${LOGOUT}`);

    if (data && data.status === "success") {
      localStorage.removeItem("auth");

      navigate("/");
      window.location.reload();
    } else {
      console.error("Logout failed:", error);
    }
  }

  return (
    <nav className="z-50 flex w-full items-center justify-between bg-gray-transparent p-4 backdrop-blur-xl">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-6">
        <NavItem to="/" icon={<FaHome className="h-5 w-6" />}></NavItem>
        <NavItem
          to="createEmployee"
          icon={<IoCreateSharp className="h-5 w-6" />}
        ></NavItem>
        <NavItem
          to="employeeList"
          icon={<FaList className="h-5 w-6" />}
        ></NavItem>
        <NavItem to="login" icon={<IoLogIn className="h-5 w-6" />}></NavItem>

        {/* Logout Button */}
        <button onClick={handleLogout}>
          <IoLogOut className="h-5 w-6" />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
