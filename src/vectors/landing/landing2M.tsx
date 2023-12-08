import React, { FC } from "react";

const Landing2M: FC<{
  // width?:string;
  // height?:string;
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      //width="375"
      //height="1140"
      viewBox="0 0 375 1140"
      fill="none"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="375" height="1140" fill="url(#paint0_radial_413_3579)" />
      <defs>
        <radialGradient
          id="paint0_radial_413_3579"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(129 191.743) rotate(79.6756) scale(915.073 319.75)"
        >
          <stop stop-color="#0B0F4A" />
          <stop offset="0.514353" stop-color="#2D3A90" />
          <stop offset="0.989583" stop-color="#1B267A" />
        </radialGradient>
      </defs>
    </svg>
  );
};
export default Landing2M;
