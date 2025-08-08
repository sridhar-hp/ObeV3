import React from "react";
import { useState } from "react";
import axios from 'axios';

function AddNewCourse() {

    const [newcourse, setNewCourse] = useState({});

    const handleNewcourse = async (event) => {
        event.preventDefault();// e.preventDefault();
        try {
            console.log(newcourse);
            const res = await axios.post("http://localhost:5000/Admin/addnewcourse",newcourse)
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
        setNewCourse((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
           <form onSubmit={handleNewcourse} className="nsbg">
  <div className="nspopup">

    <div className="ns">
      <input className="ns1" placeholder="Category" name="category" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input type="number" className="ns1" placeholder="Batch" name="batch" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Department ID" name="dept_id" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Degree" name="degree" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Department Name" name="dept_name" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input type="number" className="ns1" placeholder="Semester" name="semester" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input maxLength="1" className="ns1" placeholder="Section" name="section" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Course Code" name="course_code" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Staff ID" name="staff_id" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Staff Name" name="staff_name" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Course Title" name="course_title" onChange={handleInput} required />
    </div>

    <div className="ns">
      <input className="ns1" placeholder="Academic Semester" name="academic_sem" onChange={handleInput} required />
    </div>

    <button className="nssubmit" type="submit">Submit</button>
  </div>
</form>
        </>
    );
}

export default AddNewCourse;

