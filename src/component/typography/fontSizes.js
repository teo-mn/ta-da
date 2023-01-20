import Container from "react-bootstrap/Container";
import GridItem from "./GridItem";
export default function FontSizes(props) {
  return (
    <div className="bg-white text-gray-700 py-6">
      <h3 className=" font-medium text-xl mb-2">Font sizes</h3>
      <hr className="bg-gray-100 h-1 border-none" />
      <p className="text-gray-900 font-Manrope font-normal py-4">
        Spectrum ensures that different sizes of text can work together
        harmoniously, on both desktop and mobile. All font sizes have a ratio of
        1.125, known as the major second type scale. This means that each size
        is multiplied or divided by 1.125 from the previous size, starting with
        the base size, and rounded. Custom text (any non-existing typography
        component) should use a font size from this list.
      </p>
      <Container className="flex flex-col justify-between text-gray-900 w-[100%]">
        {props.props.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </Container>
    </div>
  );
}
