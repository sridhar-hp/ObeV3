import React from "react";
import LoginPage from "./Components/LoginPage/LoginPage.jsx"
import LayoutPage from "./Components/LayoutPage/LayoutPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import Classes from "./Components/Classes/Classes.jsx";
import ModifingPage from "./Components/ModifingPage/ModifingPage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from "./Components/AdminPage/AdminPage.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import NewStaffPage from "./Components/NewStaffPage/NewStaffPage.jsx";
import EditStaffPage from "./Components/EditStaffPage/EditStaffPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />

                <Route path="/LayoutPage/:id" element={<LayoutPage />} >
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="Classes" element={<Classes />} />
                    <Route path="*" element={<ErrorPage />} />

                </Route>
                <Route path="/AdminPage/:id" element={<AdminPage />} >
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="ModifingPage" element={<ModifingPage />}/>
                    <Route path="Newstaff" element={<NewStaffPage/>}/>
                    <Route path="Editstaff" element={<EditStaffPage />} />
                    {/* </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>

    );
}
export default App;
