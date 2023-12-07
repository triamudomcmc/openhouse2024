import React, { FC } from "react";

const Landing4Sun: FC<{
  // width?:string;
  // height?:string;
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="513"
      height="513"
      className={`${className}`}
      viewBox="0 0 513 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "hard-light" }} filter="url(#filter0_b_531_2776)">
        <circle
          cx="256.5"
          cy="256.5"
          r="256.5"
          fill="url(#paint0_radial_531_2776)"
        />
      </g>
      <g style={{ mixBlendMode: "hard-light" }} filter="url(#filter1_f_531_2776)">
        <ellipse
          cx="255.945"
          cy="258.27"
          rx="238.945"
          ry="239.27"
          fill="url(#paint1_radial_531_2776)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_531_2776"
          x="-2.60076"
          y="-2.60076"
          width="518.202"
          height="518.202"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.30038" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_531_2776"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_531_2776"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_531_2776"
          x="14.3992"
          y="16.3992"
          width="483.091"
          height="483.742"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.30038"
            result="effect1_foregroundBlur_531_2776"
          />
        </filter>
        <radialGradient
          id="paint0_radial_531_2776"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256.767 216.113) rotate(90) scale(271.746 829.405)"
        >
          <stop stop-color="#FFF1A8" />
          <stop offset="1" stop-color="#FFF1A8" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_531_2776"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(255.945 258.27) rotate(90) scale(239.27 550.992)"
        >
          <stop offset="0.34375" stop-color="#FFDD77" />
          <stop offset="1" stop-color="#E5B4B8" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Landing4Sun;