import React from "react";
import { NavLink,Outlet } from "react-router-dom";


function ModifingPage() {
  return (
    <div>
     
      <div>
      <NavLink to="NewStaff"><button className="m"> NEW STAFF</button></NavLink> 
      <NavLink to= "EditStaff"> <button className="m">EDIT STAFF</button></NavLink>
      </div>

      <div>

        <Outlet/>
      </div>


      
    </div>
  );
}
export default ModifingPage;