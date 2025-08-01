import React from "react";
import { NavLink } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <NavLink to="NewStaffPage">Add Staff</NavLink>
      <NavLink to="EditStaffPage">Edit Staff</NavLink>
    </div>
  );
}
export default AdminPage;