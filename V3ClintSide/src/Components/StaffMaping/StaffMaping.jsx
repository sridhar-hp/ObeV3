import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./StaffMaping.css";
import { NavLink, Outlet } from "react-router-dom";

function StaffMaping() {

    const [allstaffDetils, setAllStaffDetiles] = useState([]);
    const [showPopup,setShowPopup] = useState(false);
    const [deleteId,setDeleteId] = useState(null);

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


    const handledelete = async(deleteId)=>{
        try
        {
            await axios.delete(`http://localhost:5000/Admin/staffdelet/${deleteId}`)
            setAllStaffDetiles((prev)=> prev.filter((items)=>items.staff_id!==deleteId))
            alert("success");
            setShowPopup(false);
             setDeleteId(null);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    // const cancled = () =>{
    //      setDeleteId(null);
    //         setShowPopup(false);

    // }

    return (

        <>
            <div className="stafflistdetitpopupbox">
                <div className="nbutton">  <button className="newstaff">new staff</button> </div>

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
                                        <button className="edit-btn">Edit</button>
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
            <h3 className="dmesage">
                Do you want to delete
            </h3>

            <button className="yes" onClick={() => handledelete(deleteId)}>yes</button>

            <br />
            <button className="no" onClick={() => setShowPopup(false)}>no</button>
        </div>
    </div>
    
)}
            </div >
        </>

    );
}

export default StaffMaping;