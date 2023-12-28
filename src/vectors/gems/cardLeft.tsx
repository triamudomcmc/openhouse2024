import React, { FC } from "react";

const CardLeft: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="139"
      height="347"
      className={`${className}`}
      viewBox="0 0 139 347"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.4"
        cx="-6.03627"
        cy="144.627"
        r="106.046"
        transform="rotate(60.605 -6.03627 144.627)"
        fill="url(#paint0_radial_1652_14212)"
      />
      <circle
        opacity="0.4"
        cx="38.9177"
        cy="275.719"
        r="58.287"
        transform="rotate(76.4546 38.9177 275.719)"
        fill="url(#paint1_radial_1652_14212)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1652_14212"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.0859 44.7288) rotate(103.619) scale(153.392)"
        >
          <stop stop-color="#4E56F6" stop-opacity="0" />
          <stop offset="1" stop-color="#FC53C3" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1652_14212"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(56.0237 220.811) rotate(103.619) scale(84.31)"
        >
          <stop stop-color="#4E56F6" stop-opacity="0" />
          <stop offset="1" stop-color="#CB9996" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default CardLeft;