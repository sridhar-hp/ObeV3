import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import MarkEntry from "../MarkEntry/MarkEntry";
import './Classes.css';

function Classes() {

    const [courses, setCourses] = useState([]);//map na [] eathu podanum
    const { id } = useParams();
    console.log("id from params", id);
   

    useEffect(() => {

        const ccourses = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/staff/${id}/classes`)
                setCourses(res.data);

            }
            catch (err) {
                console.log(err);
            }
        }
        ccourses();

    }, []);

    return (
        <>
        <div className="continar" >

            {courses.map((cours, index) => (

               <Link to="/MarkEntry "className="course box"
                key={index}                                 

               state={{                              
                section:cours.section,//
                degree:cours.degree,//
                category:cours.category,//
                semester:cours.semester//
                }}>
                
                    {cours.staff_name}
                    <br />
                    {cours.course_title}
                    <br />
                    {cours.academic_sem}
                    <br />
                    {cours.degree}
                    <br />
                    {cours.section}
                    <br />
                    {cours.course_code}

                </Link>
            ))}
            
        </div>
</>
    );
}

export default Classes;