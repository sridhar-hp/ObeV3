import React from "react";
import App from "./Components/LoginPage.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
       
      </Routes>
      </BrowserRouter>



    </>

  )
}
export default App;
