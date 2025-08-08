import React from "react";
import { useState } from "react";
import axios from 'axios';


function AddNewStaff() {

    const [newstaff, setNewStaff] = useState({});

    const handleNewStaff = async (event) => {
        event.preventDefault();// e.preventDefault();
        try {
            console.log(newstaff);
            const res = await axios.post("http://localhost:5000/Admin/addnewstaff", newstaff)
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
                        <input className="ns1" placeholder="staffcategory" name="staff_category" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="staffdepartment" name="staff_dept" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="deartment catagry" name="dept_catagry" onChange={handleInput} required />
                    </div>

                    <div className="ns">
                        <input className="ns1" placeholder="role" name="Role" onChange={handleInput} required />
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

export default AddNewStaff;



















