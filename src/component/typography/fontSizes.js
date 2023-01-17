import "./fontSizes.css";
import Container from "react-bootstrap/Container";
import GridItem from "./GridItem";
export default function FontSizes(props) {
  return (
    <div className="font-size-container">
      <h3>Font sizes</h3>
      <hr />
      <p>
        Spectrum ensures that different sizes of text can work together
        harmoniously, on both desktop and mobile. All font sizes have a ratio of
        1.125, known as the major second type scale. This means that each size
        is multiplied or divided by 1.125 from the previous size, starting with
        the base size, and rounded. Custom text (any non-existing typography
        component) should use a font size from this list.
      </p>
      <Container className="grid-container">
        {props.props.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </Container>
    </div>
  );
}
