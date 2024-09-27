import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <main className="home-bg h-[90vh] p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h1 className="sm:text-heading-l md:text-[64px]">
            Login to manage Employee data
          </h1>
          <p className="">
            You can create employee profile, modify their data and much more{" "}
          </p>
        </div>
        <NavLink
          to={isAuthenticated ? "/employeeList" : "/login"}
          className="flex items-center justify-center gap-1 rounded-md bg-primary px-6 py-1 text-body-s transition-all hover:rounded-full active:scale-90 xs:text-body-m"
        >
          {isAuthenticated ? "Manage Employees" : "Login"}
        </NavLink>
      </div>
    </main>
  );
}

export default Home;
