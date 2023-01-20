import React from "react";
export default function Title({ header, headerSize, body, bg, color }) {
  return (
    <div
      className="w-[100%] h-[100%] flex flex-col justify-center items-center"
      style={{
        backgroundColor: bg,
        color: color,
      }}
    >
      <div>
        <div
          className="font-bold"
          style={{
            fontSize: headerSize,
          }}
        >
          {header}
        </div>
        <div className="typo-heading-example">{body}</div>
      </div>
    </div>
  );
}
