import "./lineHeight.css";
export default function LineHeight() {
  return (
    <div className="line-height-container">
      <h3>Line height</h3>
      <hr />
      <div className="line-height-title">
        <div className="line-height-content">
          <div className="line-height-title-container">
            <p>Striving to be a Consistent</p>
            <div className="cyan"> Tech Chainger</div>
          </div>
        </div>
        <div className="line-height-subtitle">
          <h3>Heading, body, detail and code</h3>
          <p>
            Heading, body, detail and code use a 1.5x multipler to ensure
            readibilty. This applies to all TEO fonts as well as their fallback
            fonts.
          </p>
        </div>
      </div>
    </div>
  );
}
