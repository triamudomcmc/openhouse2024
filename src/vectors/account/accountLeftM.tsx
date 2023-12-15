import React, { FC } from "react";

const AccountLeftM: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="375"
      height="576"
      className={`${className}`}
      viewBox="0 0 375 576"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <rect
          x="184.673"
          y="59.8491"
          width="99.2922"
          height="149.609"
          fill="url(#paint0_radial_1065_3089)"
        />
        <rect
          x="285.978"
          y="461.714"
          width="77.8237"
          height="117.406"
          transform="rotate(-180 285.978 461.714)"
          fill="url(#paint1_radial_1065_3089)"
        />
        <path
          d="M-28 250.383H130.331L117.79 575.766H-2.13407L-28 250.383Z"
          fill="url(#paint2_linear_1065_3089)"
        />
        <circle
          cx="312.062"
          cy="84.9379"
          r="75.3398"
          transform="rotate(-97.8626 312.062 84.9379)"
          fill="url(#paint3_radial_1065_3089)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_1065_3089"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(197.531 81.3241) rotate(73.9809) scale(133.311 88.5036)"
        >
          <stop stop-color="#7423E5" />
          <stop offset="0.8125" stop-color="#CF00FF" />
          <stop offset="1" stop-color="#CF00FF" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1065_3089"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(296.055 478.567) rotate(73.9997) scale(104.606 69.3742)"
        >
          <stop stop-color="#7423E5" />
          <stop offset="0.8125" stop-color="#CF00FF" />
          <stop offset="1" stop-color="#CF00FF" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_1065_3089"
          x1="51.1654"
          y1="250.383"
          x2="51.1654"
          y2="575.766"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.133333" stop-color="#7423E4" />
          <stop offset="0.538462" stop-color="#AC2BE0" />
          <stop offset="0.953846" stop-color="#AC2BE0" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_1065_3089"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(355.266 41.0194) rotate(130.969) scale(170.724 196.955)"
        >
          <stop offset="0.079615" stop-color="#FC31D0" stop-opacity="0" />
          <stop offset="0.427083" stop-color="#FF31D2" />
          <stop offset="1" stop-color="#FFDD77" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default AccountLeftM;
