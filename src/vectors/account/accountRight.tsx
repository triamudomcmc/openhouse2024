import React, { FC } from "react";

const AccountRight: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="237"
      height="386"
      viewBox="0 0 237 386"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="103.595"
        width="133.053"
        height="299.074"
        fill="url(#paint0_linear_1134_2679)"
      />
      <rect
        y="87.5627"
        width="142.472"
        height="297.897"
        fill="url(#paint1_linear_1134_2679)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1134_2679"
          x1="170.121"
          y1="6.69027e-07"
          x2="219.556"
          y2="313.066"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF85A6" />
          <stop offset="0.583333" stop-color="#FFDD77" stop-opacity="0.69" />
          <stop offset="0.921875" stop-color="#FFDD77" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1134_2679"
          x1="71.2362"
          y1="87.5627"
          x2="71.2362"
          y2="385.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E62FCF" />
          <stop offset="0.533597" stop-color="#7623E6" />
          <stop offset="1" stop-color="#7623E6" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AccountRight;