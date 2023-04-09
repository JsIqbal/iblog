import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NewDashboard from "./common/dash.component";

import { Login } from "../platform";
import "../../styles/App.css";
import Home from "../platform/admin/components/home.component";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<NewDashboard />}>
                    {" "}
                    <Route index element={<Home />} />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}
