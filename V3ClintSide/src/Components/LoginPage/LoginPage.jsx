import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



function LoginPage() {
  const [staffId, setStaffId] = useState("");
  const [staffPass, setStaffPass] = useState("");
  const [message,setMessage] = useState("loging page");
  
  const navigate = useNavigate();
  console.log(staffId, staffPass);

  const HandleLogin = async () => {

    try {
      const res = await axios.post("http://localhost:5000/login", {
        staffId,
        staffPass
      });

      if (res.data.success) {
        const roll = res.data.user.Role;

        if (roll === "Admin") {
          navigate(`/Admin/${staffId}`);
        }

        else {
          navigate(`/Layout/${staffId}`);
        }
      }
      else {
        setMessage("login failed");
      }
    }
    catch (err) {
      console.log(err);
      alert("something wrong");
      console.log(staffId, staffPass);
    }
  }

  return (
    <>
      <h1>{message}</h1>
      <div>

        <input className="input1"
          placeholder="staffId"
          value={staffId}
          onChange={e => setStaffId(e.target.value)} />

        <input className="input2"
          placeholder="staffPass"
          value={staffPass}
          onChange={e => setStaffPass(e.target.value)} />
        <button onClick={HandleLogin}> LOGIN </button>
      </div>


    </>
  )
}
export default LoginPage;
