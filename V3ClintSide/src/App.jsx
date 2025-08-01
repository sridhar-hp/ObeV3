import React from "react";
import LoginPage from "./Components/LoginPage/LoginPage.jsx"
import LayoutPage from "./Components/LayoutPage/LayoutPage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
          <Route path="/Layout/:id" element={<LayoutPage />} />


      </Routes>
    </BrowserRouter>

  );
}
export default App;
