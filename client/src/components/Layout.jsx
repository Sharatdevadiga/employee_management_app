import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

function Layout() {
  return (
    <main className="flex w-auto flex-col gap-6">
      <section className="fixed z-50 w-full">
        <Navigation />
      </section>
      <section className="mt-16">
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
