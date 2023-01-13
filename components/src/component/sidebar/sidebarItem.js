import { useState } from "react";

export default function SidebarItem(item) {
  const [open, setOpen] = useState(false);
  if (item.item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>{item.item.title}</span>
          <i className="bi-chevron-down"></i>
        </div>
        <div className="sidebar-content">
          {item.item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.item.path || "#"} className="sidebar-item">
        <div className="sidebar-title">
          <span>{item.item.title}</span>
        </div>
      </a>
    );
  }
}
