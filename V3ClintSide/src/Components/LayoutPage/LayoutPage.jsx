import { NavLink, Outlet } from "react-router-dom";
import './LayoutPage.css'

function LayoutPage() {

  return (
    <div className="laylayout" >
      <div className="laysidebar">
        <img src="/Images/JmcV3.png" alt="" />
        <NavLink className="layhomebutton" to="HomePage"> Home </NavLink>
        <NavLink to="Classes" className="layclassbutton"> classes </NavLink>
        <NavLink to="../" className="laylogout"> LOGOUT </NavLink>
      </div>

      <div className="laymaincontent">
        <Outlet />
      </div>

    </div>
  );
}

export default LayoutPage;  