import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./StaffMaping.css";
import { NavLink, Outlet } from "react-router-dom";

function StaffMaping() {

    const [allstaffDetils, setAllStaffDetiles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [newstaff, setNewStaff] = useState([]);
    const [showFoorm, setShowFoorm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editStaffId, setEditStaffId] = useState(null);
    const [editStaff, setEditStaff] = useState(null); //[]

    useEffect(() => {

        const allstaffdetiles = async () => {
            try {
                const res = await axios.get("http://localhost:5000/Admin/stafflist")
                if (res.status === 200) {
                    setAllStaffDetiles(res.data);
                }
                else {
                    console.error("fetching error");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        allstaffdetiles();
    }, []);


    const handleDeletclick = async (staff_id) => {//this is for deleting
        try {
            setDeleteId(staff_id);
            setShowPopup(true);
        }
        catch (err) {
            console.error("deleting error:", err);
        }
    };


    const handledelete = async (deleteId) => {
        try {
            await axios.delete(`http://localhost:5000/Admin/staffdelet/${deleteId}`)
            setAllStaffDetiles((prev) => prev.filter((items) => items.staff_id !== deleteId))
            alert("success");
            setShowPopup(false);
            setDeleteId(null);
        }
        catch (err) {
            console.error(err);
        }
    }

    // const cancled = () =>{
    //      setDeleteId(null);
    //         setShowPopup(false);

    // }
    //===============================================================================================================================================

    const handleNewStaff = async (event) => {
        event.preventDefault();// e.preventDefault();
        try {
            console.log(newstaff);
            const res = await axios.post("http://localhost:5000/Admin/addnewstaff", newstaff)
            if (res.data.success) {
                alert("add success");
                setShowFoorm(false);
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

    const handlepopup = async () => {
        try {
            setShowFoorm(true);
            //setShowPopup(true);
        }
        catch (err) {
            console.error("deleting error:", err);
        }
    }

    //=================================================================================================================================================
    const handleEditclick = async (staff) => {//staff_id
        try {
            setEditStaffId(staff.staff_id);
            setEditStaff(staff);
            setShowEdit(true);
        }
        catch (err) {
            console.error(err);
        }
    }

    const handleEditInput = (event) => {
        const { name, value } = event.target;
        setEditStaff((prev) => ({ ...prev, [name]: value }));
    }

    const handleSupmit = async (event) => {
        console.log("editStaffId:", editStaffId);   // should be number/string, e.g., 3
        console.log("editStaff:", editStaff);
         event.preventDefault();
        try {
            console.log(editStaff);
            await axios.put(`http://localhost:5000/Admin/editStaff/${editStaffId}`, editStaff)
            alert("staff edit succesfully");
            setEditStaffId(null);
            setShowEdit(false);

        }
        catch (err) {
            alert("staff edit failed");
            console.error(err);
        }
    }

    return (

        <>
            <div className="stafflistdetitpopupbox">
                <div className="nbutton">  <button className="newstaff" onClick={() => { handlepopup() }}>new staff</button> </div>
                <table >
                    <thead >
                        <tr className="slheding">
                            <th>s.NO</th>
                            <th>NAME</th>
                            <th>STAFF ID</th>
                            <th>STAFF CATEGORY</th>
                            <th>STAFF PASS</th>
                            <th>STAFF DEPARTMENT</th>
                            <th>DEPARTMENT CATOGRY</th>
                            <th>STAFF ROLE IN COLLAGE</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>

                    <tbody>{allstaffDetils.map((alldetiles, index) => (
                        <tr className="slbodycontent" key={index}>
                            <td>{index + 1}</td>
                            <td>{alldetiles.staff_name}</td>
                            <td>{alldetiles.staff_id}</td>
                            <td>{alldetiles.staff_category}</td>
                            <td>{alldetiles.staff_pass}</td>
                            <td>{alldetiles.staff_dept}</td>
                            <td>{alldetiles.dept_catagry}</td>
                            <td>{alldetiles.Role}</td>
                            <td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="delete-btn" onClick={() => handleDeletclick(alldetiles.staff_id)}>Delete</button>
                                        <button className="edit-btn" onClick={() => { handleEditclick(alldetiles) }}>Edit</button>
                                    </div>
                                </td>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {showPopup && (
                    <div className="delete-popup-baground">
                        <div className="delete-popup-container">
                            <h3 className="dmesage"> Do you want to delete </h3>
                            <button className="yes" onClick={() => handledelete(deleteId)}>yes</button>
                            <br />
                            <button className="no" onClick={() => setShowPopup(false)}>no</button>
                        </div>
                    </div>
                )}

                {showFoorm && (

                    <div className="addpopup-baground">

                        <form onSubmit={handleNewStaff} className="nsbg">
                            <input className="ns1" placeholder="staffname" name="staff_name" onChange={handleInput} required />

                            <input className="ns1" placeholder="staffid" name="staff_id" onChange={handleInput} required />

                            <input className="ns1" placeholder="staffcategory" name="staff_category" onChange={handleInput} required />

                            <input className="ns1" placeholder="staffdepartment" name="staff_dept" onChange={handleInput} required />

                            <input className="ns1" placeholder="deartment catagry" name="dept_catagry" onChange={handleInput} required />

                            <input className="ns1" placeholder="role" name="Role" onChange={handleInput} required />

                            <input className="ns1" placeholder="password" name="staff_pass" onChange={handleInput} required />

                            <button className="nssubmit" type="submit" > submit </button>

                        </form>
                    </div>
                )}


                {showEdit && (
                    <div>
                        <form onSubmit={handleSupmit}>
                            <input className="ns1" placeholder="staffname" name="staff_name" value={editStaff.staff_name || ""} onChange={handleEditInput} required />

                            <input className="ns1" placeholder="staffid" name="staff_id" value={editStaff.staff_id || ""} onChange={handleEditInput} required />

                            <input className="ns1" placeholder="staffcategory" name="staff_category" value={editStaff.staff_category || ""} onChange={handleEditInput} required />

                            <input className="ns1" placeholder="staffdepartment" name="staff_dept" value={editStaff.staff_dept || ""} onChange={handleEditInput} required />

                            <input className="ns1" placeholder="deartment catagry" name="dept_catagry" value={editStaff.dept_catagry || ""} onChange={handleEditInput} required />

                            <input className="ns1" placeholder="role" name="Role" value={editStaff.Role || ""} onChange={handleEditInput} required />

                            <input className="ns1" placeholder="password" name="staff_pass" value={editStaff.staff_pass || ""} onChange={handleEditInput} required />

                            <button className="nssubmit" type="submit" > submit </button>
                        </form>
                    </div>
                )}

            </div >
        </>

    );
}

export default StaffMaping;