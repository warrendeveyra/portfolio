import React from "react";
import { useTheme } from "@mui/material/styles";

function ScrollIcon(props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const iconColor = isDark ? "#9B09DF" : "#000";

  return (
    <svg
      width={29}
      height={50}
      viewBox="0 0 29 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(15px); opacity: 0; }
          }
        `}
      </style>
      <rect
        x={1}
        y={1}
        width={27}
        height={47.077}
        rx={13.5}
        stroke={iconColor}
        strokeWidth={2}
        style={{ transition: 'stroke 0.3s ease' }}
      />
      <circle
        cx={14.5}
        cy={10.039}
        r={4.462}
        fill={iconColor}
        style={{
          animation: "scroll 2.5s ease-out infinite",
          transition: 'fill 0.3s ease'
        }}
      />
    </svg>
  );
}

export default ScrollIcon;
