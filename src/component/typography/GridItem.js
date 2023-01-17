export default function GridItem(item) {
  return (
    <div className="grid-item-container">
      <div className="grid-column">{item.item.size}</div>
      <div className="grid-column">{item.item.desktopScale}</div>
      <div className="grid-column">{item.item.mobileScale}</div>
    </div>
  );
}
