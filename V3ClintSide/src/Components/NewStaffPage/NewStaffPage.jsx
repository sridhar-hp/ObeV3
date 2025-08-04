import React from "react";
import {useState} from "react";

function NewStaffPage() {
  const [newStaff,setNewStaff]=useState({
    
  });

  
  return (
    <>
    <div>
      <h1>New Staff Page</h1>
     
      <p>This is where you can add new staff members.</p>
   <div> 
      <div > 
      <input placeholder="staffname"
        name="staffName"/> 
      </div>
      <div> 
        
      <input placeholder="staffid"
        name="staffId"/>
     </div>
        <div> 
        <input placeholder="class"
          name="class"/> 
     </div>
        <div> 
        <input placeholder="debartment"
          name="dbt"/>
     </div>
        <div> 
      
          <input placeholder="semyear"
            name="sem"/>
    </div>
         </div>
        </div>
     </>
  );
}
export default NewStaffPage;



















