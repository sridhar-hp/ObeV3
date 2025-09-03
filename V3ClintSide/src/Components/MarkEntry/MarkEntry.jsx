import React from "react";
import { Link } from "react-router-dom";
import './MarkEntry.css';

function MarkEntry() {
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
                        <tr className="bme">
                            <td>123123</td>
                            <td>bca</td>
                            <td>e</td>
                            <td>lot mark</td>
                            <td>mot mark</td>
                            <td>hot mark</td>
                            <td>total</td>
                        </tr>
                    </tbody>
                </table>
                <button className="me">submit</button>

            </div>
        </>
    );
}
export default MarkEntry;