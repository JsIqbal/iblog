import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="row mx-3">
            <div className="col-xl-3 col-md-6 mb-4">
                <Link to={`/admins`} style={{ textDecoration: "none" }}>
                    <div className="card  h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        Admins
                                    </div>
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        <i className="bi bi-people fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <Link to={`/admins`} style={{ textDecoration: "none" }}>
                    <div className="card  h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        Users
                                    </div>
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        <i className="bi bi-people fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <Link to={`/admins`} style={{ textDecoration: "none" }}>
                    <div className="card  h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        Products
                                    </div>
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        <i className="bi bi-bag-check fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <Link to={`/admins`} style={{ textDecoration: "none" }}>
                    <div className="card  h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        Services
                                    </div>
                                    <div className=" text-center font-weight-bold text-uppercase">
                                        <i className="bi bi-bag-check fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
