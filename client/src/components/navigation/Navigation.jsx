import { FaUser } from "react-icons/fa6";
import NavItem from "./NavItem";
import Logo from "../Logo";

function Navigation() {
  return (
    <nav className="z-50 flex w-full items-center justify-between bg-gray-transparent p-4 backdrop-blur-xl">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <NavItem to="/">Home </NavItem>
        <NavItem to="createEmployee">Create-Employee </NavItem>
        <NavItem to="employeeList">Employee-List </NavItem>
        <NavItem to="login">Login</NavItem>
        <NavItem to="user" icon={<FaUser className="h-4 w-4" />}></NavItem>
        <NavItem to="login">Logout</NavItem>
      </div>
    </nav>
  );
}

export default Navigation;
