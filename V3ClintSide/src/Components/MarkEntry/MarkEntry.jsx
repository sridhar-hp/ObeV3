import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './MarkEntry.css';
import axios from "axios";

function MarkEntry() {

    const [markEntry, setMarkEntry] = useState();
    const [detils, setDetiles] = useState([]);

    const location = useLocation();
    const state = location.state || {};

    console.log("state===>", state);
    // setMarkEntry(state);
    useEffect(() => {
        // setMarkEntry(state);
        if (state) {
            const displaymark = async () => {
                const res = await axios.get("http://localhost:5000/mark", { params: state })//state
                  console.log("Frontend sent params:", state);
                console.log("Backend response:", res.data);
                setDetiles(res.data);
            }
            displaymark();
        }
    }, [state]);

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
                            <th>section</th>
                            <th>LOT</th>
                            <th>MOT</th>
                            <th>HOT</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {detils.map((mdet, index) => (
                            <tr className="bme" key={index}>
                                <td>{index + 1}</td>
                                <td>{mdet.Register_number}</td>
                                <td>{mdet.class_name}</td>
                                <td>{mdet.section}</td>
                                <td>{mdet.LOT}</td>
                                <td>{mdet.MOT}</td>
                                <td>{mdet.HOT}</td>
                                <td>{mdet.TOTAL}</td>
                                <td><button className="me">submit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}
export default MarkEntry;