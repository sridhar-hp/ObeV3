import React from "react";
import {useState} from "reactrouterdom";

function NewStaffPage() {
  const [newStaff,setNewStaff]=useState();

  
  return (
    <div>
      <h1>New Staff Page</h1>
     
      <p>This is where you can add new staff members.</p>
   <div> 
      <div> 
      <input placeholder="staffname"
        name="staffName"> </input>
      </div>
      <div> 
        
      <input placeholder="staffid"
        name="staffId"> </input>
     </div>
        <div> 
        <input placeholder="class"
          name="class"> </input>
     </div>
        <div> 
        <input placeholder="debartment"
          name="dbt"> </input>
     </div>
        <div> 
      
          <input placeholder="semyear"
            name="sem"> </input>
    </div>
         </div>
        </div>
     
  );
}
export default NewStaffPage;



















