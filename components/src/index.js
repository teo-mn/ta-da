import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sidebar from "./component/sidebar/sidebar";
import PageHeader from "./component/typography/pageHeader";
import Contents from "./component/typography/Contents";
import TypeFaces from "./component/typography/typeFaces";
import TypographyComps from "./component/typography/typographyComps";
import TextFormat from "./component/typography/textFormatting";
import FontSizes from "./component/typography/fontSizes";
import LineHeight from "./component/typography/lineHeight";
import Footer from "./component/typography/footer";
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
        <div className="space"></div>
        <FontSizes />
        <div className="space"></div>
        <LineHeight />
        <div className="space"></div>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
