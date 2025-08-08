import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { NavLink,Outlet } from "react-router-dom";
import './CourseMap.css';

function CourseMap() {

    const [allCourseDetils,setAllCourseDetiles] = useState([]);

    useEffect(() => {
        
        const allCourseDetiles = async () => {
            try {
                const res = await axios.get("http://localhost:5000/Admin/courselist")
                if (res.status === 200) {
                    setAllCourseDetiles(res.data);
                }
                else {
                    console.error("fetching error");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        allCourseDetiles();
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
            <div className="courselistdetitpopupbox">
                <NavLink to="AddNewCourse"><button className="newcourse">new course</button></NavLink>
                <table >
                    <thead >
                        <tr className="cheding">
                            <th>s.NO</th>
                            <th>NAME</th>
                            <th>STAFF ID</th>
                            <th>CATEGORY</th>
                            <th>BATCH</th>
                            <th>DEPARTMENT NAME</th>
                            <th>DEPARTMENT ID</th>
                            <th>COURSE CODE</th>
                            <th>DEGREE</th>
                            <th>SEMESTER</th>
                            <th>SECTION</th>
                            <th>COURSE TITLE</th>
                            <th>ACADEMIC SEM</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>

                    <tbody>{allCourseDetils.map((allcdetiles, index) => (
                        <tr className="cbodycontent" key={index}>
                            <td>{index + 1}</td>
                            <td>{allcdetiles.staff_name}</td>
                            <td>{allcdetiles.staff_id}</td>
                            <td>{allcdetiles.category}</td>
                            <td>{allcdetiles.batch}</td>
                            <td>{allcdetiles.dept_name}</td>
                            <td>{allcdetiles.dept_id}</td>
                            <td>{allcdetiles.course_code}</td>
                            <td>{allcdetiles.degree}</td>
                            <td>{allcdetiles.semester}</td>
                            <td>{allcdetiles.section}</td>
                            <td>{allcdetiles.course_title}</td>
                            <td>{allcdetiles.academic_sem}</td>
                            <td><button onClick={() => { handleDelet(allcdetiles.staff_id) }}>delete</button> <button>edit</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>

    );
}

export default CourseMap;