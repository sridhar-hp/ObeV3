import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./StaffMaping.css";

function StaffMaping() {

    const [allstaffDetils, setAllStaffDetiles] = useState([]);

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

    // const handleDelet = async (staff_id) => {//this is for deleting
    //     try {
    //         await axios.delete(`http://localhost:5000/Admin/staff/list${staff_id}`)
    //         setStaffDetiles((Prev) => Prev.filter((items) => items.staff_id !== staff_id));
    //         alert("delete success");
    //     }
    //     catch (err) {
    //         console.error("deleting error:", err);
    //     }
    // };
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
                            <th>sTAFF PASS</th>
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
                                        <button className="delete-btn" onClick={() => handleDelet(alldetiles.staff_id)}>Delete</button>
                                        <button className="edit-btn">Edit</button>
                                    </div>
                                </td>

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default StaffMaping;