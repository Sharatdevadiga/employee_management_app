import { FaPeopleGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <FaPeopleGroup className="h-6 w-6 text-primary md:h-8 md:w-8"></FaPeopleGroup>
    </NavLink>
  );
}

export default Logo;
