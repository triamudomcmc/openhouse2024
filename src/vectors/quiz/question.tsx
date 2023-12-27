import React, { FC } from "react";

const QuestionSvg: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="531"
      height="213"
      className={`${className}`}
      viewBox="0 0 531 213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.171875 30.4035C0.171875 14.1164 13.3752 0.913086 29.6622 0.913086H501.508C517.795 0.913086 530.999 14.1164 530.999 30.4035V183.06C530.999 199.347 517.795 212.55 501.508 212.55H29.6623C13.3752 212.55 0.171875 199.347 0.171875 183.06V30.4035Z"
        fill="#690FC2"
      />
      <path
        d="M352.322 87.8965C126.839 -35.3305 151.992 105.112 0.172455 87.8964L0.172466 26.9336C0.172468 12.5626 11.8224 0.912668 26.1934 0.91267L352.322 0.912727L352.322 87.8965Z"
        fill="url(#paint0_linear_1236_13217)"
      />
      <path
        d="M190.992 129.285C408.701 247.247 384.414 112.805 530.999 129.285V186.531C530.999 200.902 519.349 212.552 504.978 212.552H190.992V129.285Z"
        fill="url(#paint1_linear_1236_13217)"
      />
      <rect
        x="300.281"
        y="28.6689"
        width="230.719"
        height="31.2251"
        fill="url(#paint2_linear_1236_13217)"
      />
      <rect
        x="230.891"
        y="186.529"
        width="230.719"
        height="31.2251"
        transform="rotate(-180 230.891 186.529)"
        fill="url(#paint3_linear_1236_13217)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1236_13217"
          x1="-11.506"
          y1="76.1173"
          x2="352.438"
          y2="26.224"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#27056E" />
          <stop offset="1" stop-color="#8B17FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1236_13217"
          x1="542.275"
          y1="140.561"
          x2="190.992"
          y2="189.133"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#27056E" />
          <stop offset="1" stop-color="#8B17FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1236_13217"
          x1="525.796"
          y1="44.2815"
          x2="326.302"
          y2="44.2815"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFEBB0" />
          <stop offset="1" stop-color="#FFDD77" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1236_13217"
          x1="456.405"
          y1="202.142"
          x2="256.912"
          y2="202.142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFEBB0" />
          <stop offset="1" stop-color="#FFDD77" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default QuestionSvg;
