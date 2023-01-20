export default function Contents(props) {
  return (
    <div className="bg-white text-gray-700">
      <h3 className="font-medium text-xl mb-2">Table of contents</h3>
      <hr className="w-100 border-none h-1 bg-gray-100" />
      <ul className=" py-4 list-none text-blue-800">
        {props.props.map((item, index) => (
          <li className=" my-3 hover:cursor-pointer" key={index}>
            {item.subtitle}
          </li>
        ))}
      </ul>
    </div>
  );
}
