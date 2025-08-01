import React from "react";
import { NavLink } from "react-router-dom";
import NewStaffPage from "../NewStaffPage/NewStaffPage.jsx";


function ModifingPage() {
  return (
    <div>
      <h1>hello this is ModifingPage </h1>

      <NavLink to="NewStaffPage"> ADD STAFF </NavLink>
      <NavLink to= "EditStaffPage"> EDIT STAFF </NavLink>
    </div>
  );
}
export default ModifingPage;