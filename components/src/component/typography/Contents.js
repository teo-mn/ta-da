import "./Contents.css";

export default function Contents() {
  return (
    <div className="content-container">
      <h3>Table of contents</h3>
      <hr />
      <ul>
        <li className="content-title">Typefaces</li>
        <li className="content-title">Typography components</li>
        <li className="content-title">Text formatting</li>
        <li className="content-title">Line height</li>
        <li className="content-title">Fallback</li>
        <li className="content-title">Changelog</li>
      </ul>
    </div>
  );
}
