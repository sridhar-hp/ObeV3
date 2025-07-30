import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function LoginPage()
{
    const [staffId,setStaffId]=useState([]);
    const [staffPass,setStaffPass]=useState([]);
    
    console.log(staffId,staffPass);

    const HandleLogin()
    {
    const res = awite axios.post('http://localhost:5000/login',{
        staffId,
        staffPass
    }
      )
        if (res.data.success) {
        const roll = res.data.user.Role;

        if (roll === "Admin") {
          navigate(`/Admin/${staff_id}`);
        }

        else {
          navigate(`/Layout/${staff_id}`);
        }
      }
      else {
        setMessage("login failed");
      }
    }
    catch (err) {
      alert("something wrong");
      console.log(staff_id, staff_pass)
    }
  }
            
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
