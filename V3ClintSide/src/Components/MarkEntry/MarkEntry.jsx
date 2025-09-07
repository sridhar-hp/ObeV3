import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './MarkEntry.css';
import axios from "axios";

function MarkEntry() {

    // const [markEntry, setMarkEntry] = useState({});
    const [detils, setDetiles] = useState([]);

    const location = useLocation();
    const state = location.state || {};

    console.log("state===>", state);
    useEffect(() => {

        if (state) {
            const displaymark = async () => {
                const res = await axios.get("http://localhost:5000/mark", { params: state })//state
                console.log("Frontend send:", state);
                console.log("Backend response:", res.data);
                setDetiles(res.data);
            }
            displaymark();
        }
    }, [state]);//
    //==============================================================================================================================
    const handleentry = (index, field, value) => {
        const update = [...detils];
        update[index][field] = value;
        setDetiles(update);
    }

    const handlesupmit = async () => {
        try {
            const res = await axios.put('http://localhost:5000/MarkEntry',
                {
                    students: detils,//updated marks
                    context: state//necessy feilds for finding the students in the db
                });
            alert("mark entered succesfully");
        }
        catch (err) {
            console.error("the mark entred:", err);
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
                                <td><input name="LOT" className="meibox" type="number" value={mdet.LOT || ""} onChange={(e) => handleentry(index, "LOT", e.target.value)} /></td>
                                <td><input name="MOT" className="meibox" type="number" value={mdet.MOT || ""} onChange={(e) => handleentry(index, "MOT", e.target.value)} /></td>
                                <td><input name="HOT" className="meibox" type="number" value={mdet.HOT || ""} onChange={(e) => handleentry(index, "HOT", e.target.value)} /></td>
                                <td><input name="TOTAL" className="meibox" type="number" value={mdet.TOTAL || ""} onChange={(e) => handleentry(index, "TOTAL", e.target.value)} /></td>
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