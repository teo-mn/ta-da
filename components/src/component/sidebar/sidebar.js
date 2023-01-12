import React from "react";
import logo from "./logo.svg";
import "./sidebar.css";
import SidebarItem from "./sidebarItem";
import items from "./data/sidebar.json";
import languages from "./data/language.json";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="navContainer">
        <div>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
        <div>
          {languages.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
