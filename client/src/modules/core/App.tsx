import { useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Login } from "../platform";
import "../../styles/App.css";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<Login />} />
            </Routes>
            <ToastContainer />
        </>
    );
}
