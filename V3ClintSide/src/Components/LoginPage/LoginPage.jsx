import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import jmc from '../Images/JmcV3.png';
import './LoginPage.css';


function LoginPage() {
    const [staffId, setStaffId] = useState("");
    const [staffPass, setStaffPass] = useState("");
    const [message, setMessage] = useState("loging page");

    const navigate = useNavigate();
    console.log(staffId, staffPass);

    const HandleLogin = async () => {

        try {
            const res = await axios.post("http://localhost:5000/login", {
                staffId,
                staffPass
            });

            if (res.data.success) {
                const roll = res.data.Role;
                console.log(roll);

                if (roll === "Admin") {
                    // setMessage("login success");
                    // alert("login success");
                    navigate(`/AdminPage/${staffId}`);
                }

                else {
                    setMessage("login success");
                    alert("login success");
                    navigate(`/LayoutPage/${staffId}`);
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
        <div className="background">
            <div className="popup">
                <div >
                    <img className="logo" src='/Images/JmcV3.png' alt="jmclogo" />
                </div>
                <div>
                    <h1>{message}</h1>
                    <input className="input1"
                        placeholder="staffId"
                        value={staffId}
                        onChange={e => setStaffId(e.target.value)} />

                    <input className="input2"
                        placeholder="staffPass"
                        type="password"
                        value={staffPass}
                        onChange={e => setStaffPass(e.target.value)} />
                    <button onClick={HandleLogin}> LOGIN </button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;
