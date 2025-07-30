import React, { useState } from "react";

function LoginPage()
{
    const [staffId,setStaffId]=useState([]);
    const [staffPass,setStaffPass]=useState([]);
    
    console.log(staffId,staffPass);

    
    return(

        <>
        <h1>hello</h1>
        <div> 
        
        <input className="input1"
         placeholder="staffId"
            value={staffId}
            onChange={e=> setStaffId(e.target.value)}/>

        <input className="input2"
         placeholder="staffPass"
        value={staffPass}
        onChange={e=>setStaffPass(e.target.value)}/>
 		<button> LOGIN </button>
        </div>
        
        
        </>
    )
}
export default LoginPage;
