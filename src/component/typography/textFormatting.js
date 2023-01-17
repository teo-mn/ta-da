import "./textFormatting.css";

export default function TextFormat() {
  return (
    <div className="text-format-container">
      <h3>Text formatting</h3>
      <hr />
      <p>
        Text formatting can be used to visually add clarity and adjust voice or
        meaning.
      </p>
      <div className="text-format-content">
        <div className="text-format-titles">
          <div className="text-format-title-content">
            <button className="text-format-button">Button</button>
          </div>
          <div className="text-format-subtitle">
            <h3>Bold</h3>
            <p>
              Bold is used to add hierarchy within a sentence or to call
              attention, for example, in buttons and toasts. It’s also used to
              directly refer to the names of UI elements in running text.
            </p>
          </div>
        </div>
        <div className="text-format-titles">
          <div className="text-format-title-content"></div>
          <div className="text-format-subtitle">
            <h3>Italic</h3>
            <p>
              Italic is used only for placeholder (“ghost”) text and image
              captions. Note that this does not apply to Adobe Clean Han because
              CJK languages should not be italicized.
            </p>
          </div>
        </div>
        <div className="text-format-titles">
          <div className="text-format-title-content"></div>
          <div className="text-format-subtitle">
            <h3>Underline</h3>
            <p>
              Underline is used only for text{" "}
              <a href="https://spectrum.adobe.com/page/link/">links</a> (either
              hover state or default state, depending on the style of the link)
              and should never be used as a mechanism for adding emphasis.
            </p>
          </div>
        </div>
        <div className="text-format-titles">
          <div className="text-format-title-content">
            <button className="text-format-button">
              <i>Button abc@adobe.com</i>
            </button>
          </div>
          <div className="text-format-subtitle">
            <h3>Strong</h3>
            <p>
              Strong can be used for placing importance on part of a sentence,
              rendering the text as a heavier font weight. This is for semantic
              formatting, when it’s intended to add a tone that conveys
              importance.
            </p>
          </div>
        </div>
        <div className="text-format-titles">
          <div className="text-format-title-content">
            <button className="text-format-button">Button</button>
          </div>
          <div className="text-format-subtitle">
            <h3>Emphasis</h3>
            <p>
              Emphasis can be used for placing emphasis on part of a sentence,
              rendering the text as italic (or heavier weight, in CJK
              languages).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
