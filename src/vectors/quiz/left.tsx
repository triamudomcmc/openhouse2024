import React, { FC } from "react";

const LeftCircle: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="429"
      height="500"
      className={`${className}`}
      viewBox="0 0 429 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.4"
        cx="225.058"
        cy="225.058"
        r="225.058"
        transform="matrix(0.490828 -0.871256 -0.871256 -0.490828 207.74 759)"
        fill="url(#paint0_radial_1611_4088)"
      />
      <circle
        opacity="0.4"
        cx="57.3097"
        cy="172.039"
        r="123.701"
        transform="rotate(57.0759 57.3097 172.039)"
        fill="url(#paint1_radial_1611_4088)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1611_4088"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(291.108 13.0468) rotate(103.619) scale(325.539)"
        >
          <stop stop-color="#4E56F6" stop-opacity="0" />
          <stop offset="1" stop-color="#FC53C3" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1611_4088"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(93.6131 55.5091) rotate(103.619) scale(178.929)"
        >
          <stop stop-color="#4E56F6" stop-opacity="0" />
          <stop offset="1" stop-color="#CB9996" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LeftCircle;