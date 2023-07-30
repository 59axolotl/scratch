import React from "react";
import "../src/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UploadForm from "../components/UploadForm";
import LogReg from "../components/LogReg";
import Theater from "../components/Theater";
import EditForm from "../components/EditForm";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<LogReg />} path="/login" />
                    <Route element={<UploadForm />} path="/videos/new" />
                    <Route element={<EditForm />} path="/videos/edit/:id" />
                    <Route element={<Theater />} path="/videos/:id" />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
