import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./ModifingPage.css";

function ModifingPage() {

  return (
    <div>
      <div className="mp-container">
        <NavLink to="NewStaff"><button className="mp"> NEW STAFF</button></NavLink>
        <NavLink to="EditStaff"> <button className="mp">EDIT STAFF</button></NavLink>
      </div>

      <div className="mcd">
        <Outlet />
      </div>
    </div>
  );
}

export default ModifingPage;