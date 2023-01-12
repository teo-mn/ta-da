import "./typeFaces.css";

export default function TypeFaces() {
  return (
    <div className="typeface-container">
      <h3>Typfaces</h3>
      <hr />
      <p>
        TEO uses the typefaces Poppins. These are available for download on the
        <a href="https://fonts.google.com/specimen/Poppins">Google fonts</a>
        page.
      </p>
      <div className="typeface-letters">
        <div className="typeface-english">AaUuBb</div>
        <div className="typeface-crillic">АаҮүӨө</div>
      </div>
    </div>
  );
}
