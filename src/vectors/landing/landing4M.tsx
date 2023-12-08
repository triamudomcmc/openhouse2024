import React, { FC } from "react";

const Landing4M: FC<{
  // width?:string;
  // height?:string;
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      //width="375"
      //height="654"
      className={`${className}`}
      viewBox="0 0 375 654"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_416_4034)">
        <rect width="375" height="654" fill="url(#paint0_linear_416_4034)" />
        <path
          opacity="0.7"
          d="M-31.9916 451.394H437.858L377.19 423.578L474 379.715L-109.439 356.178L344.921 296L-143 338.526V476H474L-31.9916 451.394Z"
          fill="url(#paint1_linear_416_4034)"
        />
        <path
          opacity="0.7"
          d="M317.423 122.588H-70.1841L-20.136 100.645L-100 66.0416L381.314 47.474L6.48535 0L409 33.5483V142H-100L317.423 122.588Z"
          fill="url(#paint2_linear_416_4034)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_416_4034"
          x1="187.5"
          y1="0"
          x2="188"
          y2="729"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3E1765" />
          <stop offset="0.159802" stop-color="#643B91" />
          <stop offset="0.369792" stop-color="#983492" />
          <stop offset="0.604167" stop-color="#EB54A0" />
          <stop offset="0.822917" stop-color="#FFDD77" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_416_4034"
          x1="165.5"
          y1="296"
          x2="165.5"
          y2="476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8A2C6A" />
          <stop offset="1" stop-color="#8A2C6A" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_416_4034"
          x1="154.5"
          y1="0"
          x2="154.5"
          y2="142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#492272" stop-opacity="0" />
          <stop offset="0.779796" stop-color="#723A92" />
        </linearGradient>
        <clipPath id="clip0_416_4034">
          <rect width="375" height="654" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Landing4M;
