import { NavBar } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
