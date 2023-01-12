import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sidebar from "./component/sidebar/sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="bar">
        <Sidebar />
      </div>
      <div className="content">
        <h1>Components go here</h1>
      </div>
    </div>
  </React.StrictMode>
);
