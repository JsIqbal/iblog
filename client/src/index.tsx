import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./core/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
