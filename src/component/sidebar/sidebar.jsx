import React from "react";
import "./sidebar.css";
import SidebarItem from "./sidebarItem";
function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="navContainer">
        <div>
          {props.props.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
