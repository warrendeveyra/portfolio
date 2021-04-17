import React from "react";

function scrollIcon(props) {
  return (
    <svg
      width={29}
      height={50}
      viewBox="0 0 29 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={1}
        y={1}
        width={27}
        height={47.077}
        rx={13.5}
        stroke="#000"
        strokeWidth={2}
      />
      <circle cx={14.5} cy={10.039} r={4.462} fill="#000" />
    </svg>
  );
}

export default scrollIcon;
