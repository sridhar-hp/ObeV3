import axios from "axios";
import { useEffect, useState } from "react";
import './CourseMap.css';

function CourseMap() {

    const [allCourseDetils, setAllCourseDetiles] = useState([]);
    const [deletC, setDeleteC] = useState(null);
    const [deletPopup, setDeletPopup] = useState(false);

    const [showFoorm, setShowFoorm] = useState(false);
    const [newCourse, setNewcourse] = useState([])

    const [showEdit, setShowEdit] = useState(false);
    const [courseEdit, setCourseEdit] = useState();
    const [editStaffId, setEditStaffId] = useState(null);


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

    const handleDeletclick = async (staff_id) => {
        setDeleteC(staff_id);
        setDeletPopup(true);
    }

    const handleDelet = async (deleteC) => {
        try {
            await axios.delete(`http://localhost:5000/Admin/coursedelet/${deleteC}`)
            setAllCourseDetiles((prev) => prev.filter((items) => items.staff_id !== deletC));
            alert("course delete successfull");
            setDeletPopup(false);
            setDeleteC(null);
        }
        catch (err) {
            console.log(err);
        }


    }
    //=====================================================================================================================================

    const handlepopup = async () => {
        setShowFoorm(true);
    }
    const handleNewform = async (event) => {
        event.preventDefault();
        const res = await axios.post("http://localhost:5000/Admin/ncourse", newCourse)
        if (res.data.success) {
            alert("add success");
            setShowFoorm(false);
        }
        else {
            alert("canot add ");
        }
    }

    const handleCourseInput = async (event) => {
        const { name, value } = event.target;
        setNewcourse((prev) => ({ ...prev, [name]: value }));
    };

    //================================================================================================================================================================

    const handleEditclick = async (staff) => {
        setEditStaffId(staff.staff_id);
        setCourseEdit(staff);
        setShowEdit(true);
    }

    const handleEditInput = async (event) => {
        const { name, value } = event.target;
        setCourseEdit((prev) => ({ ...prev, [name]: value }));

    }

    const handleESupmit = async (event) => {
        event.preventDefault();
        try {
            console.log();
            await axios.put(`http://localhost:5000/Admin/editcourse/${editStaffId}`, courseEdit)
            alert("course edit succesfully");
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
            <div className="courselistdetitpopupbox">
                <div className="cbutton">
                    <button className="newcourse" onClick={handlepopup}>New Course</button>
                </div>
                <table >
                    <thead >
                        <tr className="cheding">
                            <th>s.NO</th>
                            <th>NAME</th>
                            <th>STAFF ID</th>
                            <th>CATEGORY</th>
                            <th>BATCH</th>
                            <th>DEPT NAME</th>
                            <th>DEPT ID</th>
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
                            <td><button onClick={() => { handleDeletclick(allcdetiles.staff_id) }}>delete</button>
                                <button onClick={() => { handleEditclick(allcdetiles) }}>edit</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {deletPopup && (

                <div className="delete-popup-baground">
                    <div className="delete-popup-container">
                        <h3 className="dmesage">
                            Do you want to delete
                        </h3>
                        <button onClick={() => handleDelet(deletC)}>yes</button>
                        <button onClick={() => setDeletPopup(false)}>no</button>

                    </div>
                </div>
            )}

            {showFoorm && (
                <div className="newcourseaddform">
                    <form onSubmit={handleNewform} className="ncbg">
                        <input className="enc1" placeholder="staffname" name="staff_name" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="staffid" name="staff_id" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="category" name="category" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="batch" name="batch" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="department name" name="dept_name" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="deartment id" name="dept_id" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="course code" name="course_code" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="degree" name="degree" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="semester" name="semester" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="section" name="section" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="course title" name="course_title" onChange={handleCourseInput} required />

                        <input className="enc1" placeholder="acadamicsemster" name="academic_sem" onChange={handleCourseInput} required />

                        <button className="ncsubmit" type="submit" > submit </button> <button className="ncsubmit" onClick={()=>{setShowFoorm(false)}}> back </button>

                    </form>
                </div>
            )

            }

            {showEdit && (
                <div className="cedit">
                    <form onSubmit={handleESupmit} className="ncbg">
                        <input className="enc1" placeholder="staffname" name="staff_name" value={courseEdit.staff_name || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="staffid" name="staff_id" value={courseEdit.staff_id || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="category" name="category" value={courseEdit.category || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="batch" name="batch" value={courseEdit.batch || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="department name" name="dept_name" value={courseEdit.dept_name || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="deartment id" name="dept_id" value={courseEdit.dept_id || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="course code" name="course_code" value={courseEdit.course_code || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="degree" name="degree" value={courseEdit.degree || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="semester" name="semester" value={courseEdit.semester || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="section" name="section" value={courseEdit.section || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="course title" name="course_title" value={courseEdit.course_title || ""} onChange={handleEditInput} required />

                        <input className="enc1" placeholder="acadamicsemster" name="academic_sem" value={courseEdit.academic_sem || ""} onChange={handleEditInput} required />

                        <button className="ncsubmit" type="submit" > submit </button><button className="ncsubmit" onClick={()=>{setShowEdit(false)}}>back</button>

                    </form>
                </div>
            )

            }
        </>

    );
}

export default CourseMap;