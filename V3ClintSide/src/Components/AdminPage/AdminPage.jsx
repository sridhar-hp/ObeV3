import React from "react";
import { NavLink } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      <img className="adimg" src="/Images/JmcV3.png" alt="" />
      <NavLink className="adnew" to="NewStaffPage">Add Staff</NavLink>
      <NavLink className="adedit" to="EditStaffPage">Edit Staff</NavLink>
    </div>
  );
}
export default AdminPage;