import React, { FC } from "react";

const RightCircle: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="432"
      height="493"
      className={`${className}`}
      viewBox="0 0 432 493"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="267.354"
        cy="225.51"
        r="266.977"
        transform="rotate(35.0662 267.354 225.51)"
        fill="url(#paint0_radial_1241_13428)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1241_13428"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(461.906 318.526) rotate(-136.943) scale(503.372)"
        >
          <stop stop-color="#000BFF" />
          <stop offset="1" stop-color="#FC53C3" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RightCircle;
