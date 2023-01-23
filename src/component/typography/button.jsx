export default function Button({
  text,
  textSize,
  action,
  bg,
  color,
  decoration,
  fontStyle,
}) {
  return (
    <div className="w-[100%] flex items-center justify-center bg-gray-100 h-52">
      <button
        className="rounded-2xl py-2 px-10 font-Poppins text-sm font-normal border-none"
        style={{
          fontSize: textSize,
          backgroundColor: bg,
          color: color,
          textDecoration: decoration,
          fontStyle: fontStyle,
        }}
        onClick={action}
      >
        {text}
      </button>
    </div>
  );
}
