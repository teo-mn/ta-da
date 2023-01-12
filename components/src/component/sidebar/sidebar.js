import React from "react";
import logo from "./logo.svg";
import "./sidebar.css";
import SidebarItem from "./sidebarItem";
import items from "./data/sidebar.json";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="navContainer">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
