export default function GridItem(item) {
  console.log(item);
  return (
    <div className="grid-item-container">
      <div className="grid-column">{item.item.size}</div>
      <div className="grid-column">{item.item.desktopScale}</div>
      <div className="grid-column">{item.item.mobileScale}</div>
    </div>
  );
}
