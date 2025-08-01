import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";
import Classes from "../Classes/Classes.jsx";
import ModifingPage from "../ModifingPage/ModifingPage.jsx";
import './LayoutPage.css'

function LayoutPage() {
  return (
    <div>
      <h1>Welcome to the Layout Page</h1>
      <div>
        <NavLink to="HomePage"> Home </NavLink>
          <NavLink to="Classes"> classes </NavLink>
        
       

      </div>
<div>

  <Outlet />
</div>
      
    </div>
  );
}
export default LayoutPage;  