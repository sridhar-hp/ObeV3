import React from "react";
import LoginPage from "./Components/LoginPage/LoginPage.jsx"
import LayoutPage from "./Components/LayoutPage/LayoutPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import Classes from "./Components/Classes/Classes.jsx";
import ModifingPage from "./Components/ModifingPage/ModifingPage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/Layout/:id" element={<LayoutPage />} >
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ModifingPage" element={<ModifingPage />} />
          <Route path="Classes" element={<Classes />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
