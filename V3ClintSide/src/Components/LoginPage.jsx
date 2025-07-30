import React from "react";

function LoginPage()
{
    const [staffId,setStaffId]=useState([])
    
    return(

        <>
        <h1>hello</h1>
        <div> 
        
        <input placeholder="staffId"
            vlue={}
            onChange={setStaffId(e=></input>)> </input>
        <input placeholder="staffPass"></input>
 		<button> LOGIN </button>
        </div>
        
        </>
    )
}
export default LoginPage;
