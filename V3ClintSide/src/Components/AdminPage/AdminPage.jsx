import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminPage.css";

function AdminPage() {
  return (
    <div className="adlayout">
      <div className="adsidebar">
        <img className="adimg" src="/Images/JmcV3.png" alt="" />
        <NavLink className="adnew" to="HomePage">HOME</NavLink>
        <NavLink className="adedit" to="ModifingPage">MODIFING</NavLink>
        <NavLink className="adnew" to="../"> LOGOUT</NavLink>
      </div>
      <div className="admincontent">
        <Outlet />
      </div>
    </div>


  );
}
export default AdminPage;