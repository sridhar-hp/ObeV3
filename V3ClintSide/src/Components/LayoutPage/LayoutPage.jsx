import { NavLink, Outlet } from "react-router-dom";
import './LayoutPage.css'

function LayoutPage() {

  return (
    <div>
      <div className="sidebar">
        <NavLink className="homebutton" to="HomePage"> Home </NavLink>
          <NavLink to="Classes" className="classbutton"> classes </NavLink>
      </div>
<div className="maincontent">

  <Outlet />
</div>
      
    </div>
  );
}
export default LayoutPage;  