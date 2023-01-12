import "./typographyComps.css";

export default function TypographyComps() {
  return (
    <div className="typo-container">
      <h3>Typography components</h3>
      <hr />
      <div className="typo-content">
        <div className="typo-titles">
          <div className="typo-titles-text">
            <h3>Heading</h3>
            <p>
              Heading is used to create various levels of typographic
              hierarchies.
            </p>
            <p className="blue">View the Heading typography component</p>
          </div>
          <div className="typo-heading-content">
            <div>
              <div className="typo-heading-text">Hello world.</div>
              <div className="typo-heading-example">Example of Heading XXL</div>
            </div>
          </div>
        </div>
        <div className="typo-titles">
          <div className="typo-titles-text">
            <h3>Body</h3>
            <p>
              Body is primarily used for Spectrum components and for blocks of
              text.
            </p>
            <p className="blue">View the Body typography component</p>
          </div>
          <div className="typo-heading-content">
            <div>
              <div className="typo-body-text">
                TEO is based on real-world situations.
              </div>
              <div className="typo-heading-example">Example of Body M</div>
            </div>
          </div>
        </div>
        <div className="typo-titles">
          <div className="typo-titles-text">
            <h3 className="detail-title">Detail</h3>
            <p>
              Detail is used for disclosing extra information or smaller items
              in hierarchical relationships of text.
            </p>
            <p className="blue">View the Detail typography component</p>
          </div>
          <div className="typo-heading-content">
            <div>
              <div className="typo-detail-text">Our recommendations</div>
              <div className="typo-heading-example">Example of Detail XL</div>
            </div>
          </div>
        </div>
        <div className="typo-titles">
          <div className="typo-titles-text">
            <h3>Code</h3>
            <p>Code is used for text that represents code.</p>
            <p className="blue">View the Code typography component</p>
          </div>
          <div className="typo-heading-content">
            <div>
              <div className="typo-body-text">alert(“Hello World”);</div>
              <div className="typo-heading-example">Example of Code S</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
