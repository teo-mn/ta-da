export default function GridItem(item) {
  return (
    <div className="flex flex-row py-1 px-4 border-gray-100 border-b-2 ">
      <div className="text-sm flex font-Manrope font-normal pb-2 w-[33%]">
        {item.item.size}
      </div>
      <div className="text-sm flex font-Manrope font-normal pb-2 w-[33%]">
        {item.item.desktopScale}
      </div>
      <div className="text-sm flex font-Manrope font-normal pb-2 w-[33%]">
        {item.item.mobileScale}
      </div>
    </div>
  );
}
