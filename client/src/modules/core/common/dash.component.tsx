import React from "react";
import { Link, Outlet } from "react-router-dom";

const NewDashboard = () => {
    return (
        <div id="wrapper">
            <ul
                style={{
                    background: "#f8f9fc",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
                className="navbar-nav  sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                <a
                    style={{ color: "black" }}
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="#"
                >
                    Ecommerce
                </a>

                <li className="nav-item active">
                    <Link
                        style={{ color: "black" }}
                        className="nav-link"
                        to="/"
                    >
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link
                        style={{ color: "black" }}
                        className="nav-link"
                        to="/admins"
                    >
                        <span>Admin</span>
                    </Link>
                </li>
            </ul>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul className="navbar-nav ml-auto">
                            <div className="topbar-divider d-none d-sm-block"></div>

                            <li className="nav-item dropdown no-arrow">
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#logoutModal"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default NewDashboard;
