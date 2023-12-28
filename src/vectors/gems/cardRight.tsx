import React, { FC } from "react";

const CardRight: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="235"
      height="203"
      className={`${className}`}
      viewBox="0 0 235 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="145.139"
        cy="58.3318"
        r="144.469"
        transform="rotate(-60.8867 145.139 58.3318)"
        fill="url(#paint0_radial_1248_5639)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1248_5639"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(250.416 108.665) rotate(-136.943) scale(272.388)"
        >
          <stop stop-color="#000BFF" />
          <stop offset="1" stop-color="#FC53C3" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default CardRight;