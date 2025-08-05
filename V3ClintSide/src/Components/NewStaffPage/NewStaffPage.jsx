import React from "react";
import {useState} from "react";
import "./NewStaffPage.css";

function NewStaffPage() {
  const [newStaff,setNewStaff]=useState({
   staff
    
  });

  const handleNewStaff=async()=>{


  }
  
  return (
    <>
    <div className="nsbg">
   <div className="nspopup"> 

      <div className="ns" > 
      <input className="ns1" placeholder="staffname" name="staffName"/> 
      </div>

      <div className="ns"> 
      <input className="ns1" placeholder="staffid" name="staffId"/>
      </div>

        <div className="ns"> 
        <input className="ns1" placeholder="class"name="class"/> 
        </div>

        <div className="ns"> 
        <input className="ns1" placeholder="debartment" name="dbt"/>
        </div>

          <div className="ns"> 
          <input className="ns1" placeholder="password" name="pass"/>
         </div>
          <button className="nssubmit" type="submit"> submit </button>
         </div>
        </div>
     </>
  );
}
export default NewStaffPage;



















