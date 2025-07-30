import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function LoginPage()
{
    const [staffId,setStaffId]=useState([]);
    const [staffPass,setStaffPass]=useState([]);
    
    console.log(staffId,staffPass);

    const handleLogin()
    {
    const res = awite axios.post('http://localhost:5000/login');
        const roll = res.data.Role;

        if(roll=="Admin")
        {
            
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
