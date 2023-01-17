import "./Contents.css";

export default function Contents(props) {
  return (
    <div className="content-container">
      <h3>Table of contents</h3>
      <hr />
      <ul>
        {props.props.map((item, index) => (
          <li className="content-title" key={index}>
            {item.subtitle}
          </li>
        ))}
      </ul>
    </div>
  );
}
