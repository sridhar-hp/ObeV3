import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Classes.css';

function Classes() {

    const [courses, setCourses] = useState([]);//map na [] eathu podanum
    const{ id }= useParams();
    console.log("id from params", id);


    useEffect(() => {

        const ccourses= async () => {
            try {
                const res = await axios.get(`http://localhost:5000/staff/${id}/classes`)
               .then((res=>{ setCourses(res.data)
              
                console.log(res.data)}));
                console.log("id from params", id);

            }
            catch (err) {
                console.log(err);
            }
        }
        ccourses();

    }, []);

    return (
      
            
            <div className="continar" >
               
                {courses.map((cours, index) => (
                    <div className="course box" key={index}>
                        {cours.staff_name}
                        <br />
                             {cours.course_title}
                             <br />

                        {cours.academic_sem}

                    </div>
                ))}
            </div>
      
    );
}
export default Classes;