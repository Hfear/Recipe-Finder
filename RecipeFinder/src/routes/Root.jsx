import { NavLink, Outlet, Link } from "react-router-dom";
import Navbar from "../navbar";

export default function Root() {
    return (
      <>
      <Navbar/>

      <div>
            <Outlet />
      </div>
      
      </>
    );
}