import "./Contents.css";

export default function Contents(props) {
  console.log(props);
  return (
    <div className="content-container">
      <h3>Table of contents</h3>
      <hr />
      <ul>
        {props.props.map((item) => (
          <li className="content-title">{item.subtitle}</li>
        ))}
      </ul>
    </div>
  );
}
