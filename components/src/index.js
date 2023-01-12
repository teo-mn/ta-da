import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sidebar from "./component/sidebar/sidebar";
import PageHeader from "./component/typography/pageHeader";
import Contents from "./component/typography/Contents";
import TypeFaces from "./component/typography/typeFaces";
import TypographyComps from "./component/typography/typographyComps";
import TextFormat from "./component/typography/textFormatting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="bar">
        <Sidebar />
      </div>
      <div className="content">
        <PageHeader />
        <div className="space"></div>
        <Contents />
        <div className="space"></div>
        <TypeFaces />
        <div className="space"></div>
        <TypographyComps />
        <div className="space"></div>
        <TextFormat />
      </div>
    </div>
  </React.StrictMode>
);
