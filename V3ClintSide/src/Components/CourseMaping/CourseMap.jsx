import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './CourseMap.css';

function CourseMap() {

    const [allCourseDetils, setAllCourseDetiles] = useState([]);
    const [deletC,setDeleteC]=useState(null);
    const [deletPopup, setDeletPopup] = useState(false);
    const [showFoorm,setShowFoorm]=useState(false);
    const [newCourse,setNewcourse]=useState([])



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

    const handleDeletclick = async(staff_id)=>
    {
        setDeleteC(staff_id);
        setDeletPopup(true);
    }

    const handleDelet=async(deleteC)=>
    { 
        try{
        await axios.delete(`http://localhost:5000/Admin/coursedelet/${deleteC}`)
        setAllCourseDetiles((prev)=>prev.filter((items)=>items.staff_id!==deletC));
        alert("course delete successfull");
        setDeletPopup(false);
        setDeleteC(null);
        }
        catch(err)
        {
            console.log(err);
        }


    }
    //=====================================================================================================================================

    const handlepopup=async()=>{
        setShowFoorm(true);
    }
    const handleNewform=async(event)=>
    {
        event.preventDefault();
       const res = await axios.post("http://localhost:5000/Admin/ncourse",newCourse)
        if (res.data.success) {
                alert("add success");
                setShowFoorm(false);
            }
            else {
                alert("canot add ");
            }
    }

    const handleCourseInput=async(event)=>{
        const {name,value}=event.target;
        setNewcourse((prev)=>({...prev,[name]:value}));
    };
    return (

        <>
            <div className="courselistdetitpopupbox">
              <button className="newcourse" onClick={()=>handlepopup()}>new course</button>
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
                            <td><button onClick={() => { handleDeletclick(allcdetiles.staff_id) }}>delete</button>
                            <button>edit</button></td>
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
                        <button onClick={()=>handleDelet(deletC)}>yes</button>
                        <button onClick={()=>setDeletPopup(false)}>no</button>

                    </div>
                </div>
            )}
            
            {showFoorm && (
                <div>
                   <form onSubmit={handleNewform} className="nsbg">
                            <input className="nc1" placeholder="staffname" name="staff_name" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="staffid" name="staff_id" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="category" name="category" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="batch" name="batch" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="department name" name="dept_name" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="deartment id" name="dept_id" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="course code" name="course_code" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="degree" name="degree" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="semester" name="semester" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="section" name="section" onChange={handleCourseInput} required />

                            <input className="nc1" placeholder="course title" name="course_title" onChange={handleCourseInput} required />
                           
                            <input className="nc1" placeholder="acadamicsemster" name="academic_sem" onChange={handleCourseInput} required />

                            <button className="ncsubmit" type="submit" > submit </button>

                        </form>
                </div>
            )

            }

        </>

    );
}

export default CourseMap;