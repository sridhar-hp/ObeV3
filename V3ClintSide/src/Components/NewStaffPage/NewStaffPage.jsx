import React from "react";
import { useState } from "react";
import "./NewStaffPage.css";
import axios from 'axios';

function NewStaffPage() {

    const [newstaff, setNewStaff] = useState({});

    const handleNewStaff = async (event) => {
        event.preventDefault();// e.preventDefault();
        try {
            console.log(newstaff);
            const res = await axios.post("http://localhost:5000/Admin/newstaff", newstaff)
            if (res.data.success) {
                alert("add success");
            }
            else {
                alert("canot add ");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setNewStaff((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <form onSubmit={handleNewStaff} className="nsbg">
                <div className="nspopup">

                    <div className="ns" >
                        <input className="ns1" placeholder="staffname" name="staff_name" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="staffid" name="staff_id" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="course title" name="course_title" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="department" name="dept_name" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="academic sem" name="academic_sem" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="password" name="staff_pass" onChange={handleInput} required />
                    </div>
                    <button className="nssubmit" type="submit"> submit </button>
                </div>
            </form>
        </>
    );
}

export default NewStaffPage;



















