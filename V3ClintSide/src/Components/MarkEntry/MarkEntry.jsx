import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './MarkEntry.css';
import axios from "axios";

function MarkEntry() {

    const [markEntry, setMarkEntry] = useState({});
    const [detils, setDetiles] = useState([]);

    const location = useLocation();
    const state = location.state || {};

    console.log("state===>", state);
    useEffect(() => {
  
        if (state.section && state.degree && state.category && state.semester) {
            const displaymark = async () => {
                const res = await axios.get("http://localhost:5000/mark", { params: state })//state
                  console.log("Frontend sent params:", state);
                console.log("Backend response:", res.data);
                setDetiles(res.data);
            }
            displaymark();
        }
    }, [state.section, state.degree, state.category, state.semester]);
//==============================================================================================================================
    const handleentry = async(event)=>{
        const {name, value}=event.target;
        setMarkEntry((prev)=>({...prev,[name]:value}));
        console.log(markEntry);
    }

    const handlesupmit=async(event)=>
    {
        event.preventDefault();
        try{
            await axios.put("http://localhost:5000/MarkEntry",{...markEntry,...state})
            alert("mark entered succesfully");

        }
        catch(err)
        {
            console.error(err,"the mark entred:",markEntry);
        }

    }
// ==============================================================================================================================
    return (
        <>
            <h1 className="dummy">this is mark entry page</h1>
            <div className="meback">
                <Link to="/LayoutPage/jmc001/Classes">back</Link>
            </div>
            <div className="mecontiner">
                <table className="mebox">
                    <thead >
                        <tr className="tme">
                            <th>S.NO</th>
                            <th>register no</th>
                            <th>class</th>
                            <th >section</th>
                            <th className="metbox">LOT</th>
                            <th className="metbox">MOT</th>
                            <th className="metbox">HOT</th>
                            <th className="metbox">TOTAL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {detils.map((mdet, index) => (
                            <tr className="bme" key={index}>
                                <td>{index + 1}</td>
                                <td>{mdet.Register_number}</td>
                                <td>{mdet.class_name}</td>
                                <td>{mdet.section}</td>
                                <td><input name="LOT" className="meibox" type="number" value={markEntry.LOT || ""} onChange={handleentry}/></td>
                                <td><input name="MOT" className="meibox" type="number" value={markEntry.MOT || ""} onChange={handleentry}/></td>
                                <td><input name="HOT" className="meibox" type="number" value={markEntry.HOT || ""} onChange={handleentry}/></td>
                                <td><input name="TOTAL" className="meibox" type="number" value={markEntry.TOTAL || ""} onChange={handleentry}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                                <button onClick={handlesupmit} className="me">submit</button>


            </div>
        </>
    );
}
export default MarkEntry;