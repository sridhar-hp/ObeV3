import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import {useParams} from 'react';
import './EditStaffPage.css';

function EditStaffPage() {

    const [staffDetils, setStaffDetiles] = useState([]);

    useEffect(() => {
       // const {id} = useParams();

        const alldetiles = async () => {
            try {
                const res = await axios.get("http://localhost:5000/Admin/stafdet")
                if (res.status === 200) {
                    setStaffDetiles(res.data);
                }
                else {
                    console.error("fetching error");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        alldetiles();
    }, []);



    const handleDelet= async(staff_id)=>{
        try{
        await axios.delete(`http://localhost:5000/Admin/${staff_id}`)
        setStaffDetiles((Prev)=>Prev.filter((items)=>items.staff_id!==staff_id));
        alert("delete success");
        }
        catch(err){
            console.error("deleting error:",err);
        }
    };
    return (

        <>
            <div className="editdetitpopupbox">
                <table >
                    <thead >
                    <tr className="esheding">
                        <th>s.no</th>
                        <th>NAME</th>
                        <th>STAFF ID</th>
                        <th>courses</th>
                        <th>semsaster</th>
                        <th>EDIT</th>
                    </tr>
                    </thead>

                <tbody>{staffDetils.map((detiles, index) => (
                      <tr className="esbodycontent" key={index}>
                        <td>{index+1}</td>
                        <td>{detiles.staff_name}</td>
                        <td>{detiles.staff_id}</td>
                        <td>{detiles.cours_title}</td>
                        <td>{detiles.academic_sem}</td>
                        <td><button  onClick={()=>{handleDelet(detiles.staff_id)}}>delete</button></td>
                    </tr> 
                ))}
                </tbody>
                </table>
            </div>
        </>

    );
}

export default EditStaffPage;

// {staffDetils.map((detiles, index) => (
//                     <li className="eli" key={index}>
//                         <h1 className="eh1 ">name: {detiles.staff_name}</h1>
//                         <h3 className="eh3">staffid:{detiles.staff_id}</h3>
//                         <h5 className="eh5">course_title:{detiles.cours_title}</h5>
//                         <p className="ep">sem :{detiles.academic_sem}</p>
//                         <button className="ed" onClick={()=>{handleDelet(detiles.staff_id)}}>delete</button>
//                     </li>
//                 ))}