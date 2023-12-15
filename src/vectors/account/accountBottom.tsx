import React, { FC } from "react";

const AccountBottom: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="643"
      height="643"
      className={`${className}`}
      viewBox="0 0 643 643"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="300.034"
        cy="670.056"
        rx="180.151"
        ry="74.7686"
        fill="url(#paint0_linear_1146_2681)"
      />
      <ellipse
        cx="300.034"
        cy="661.225"
        rx="160.134"
        ry="58.8729"
        fill="url(#paint1_linear_1146_2681)"
      />
      <ellipse
        cx="297.678"
        cy="653.572"
        rx="122.456"
        ry="44.1547"
        fill="url(#paint2_linear_1146_2681)"
      />
      <path
        d="M397.763 652.394C397.763 669.627 353.217 683.597 298.268 683.597C243.318 683.597 198.772 669.627 198.772 652.394C198.772 635.162 243.318 599.997 298.268 599.997C353.217 599.997 397.763 635.162 397.763 652.394Z"
        fill="url(#paint3_radial_1146_2681)"
      />
      <g style={{mixBlendMode:"overlay"}} opacity={0.3}>
        <path
          d="M0.683594 0.547974H642.398L379.825 597.519C349.8 635.787 230.288 643.44 202.618 597.519L0.683594 0.547974Z"
          fill="url(#paint4_linear_1146_2681)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1146_2681"
          x1="300.034"
          y1="595.287"
          x2="300.034"
          y2="744.825"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8625DA" />
          <stop offset="1" stop-color="#5F2F94" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1146_2681"
          x1="300.034"
          y1="602.352"
          x2="300.034"
          y2="720.098"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AA4FF8" />
          <stop offset="1" stop-color="#5F2F94" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1146_2681"
          x1="297.678"
          y1="609.417"
          x2="297.678"
          y2="697.726"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C685FF" />
          <stop offset="1" stop-color="#5F2F94" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_1146_2681"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(287.082 607.062) rotate(81.6849) scale(77.3479 97.4097)"
        >
          <stop stop-color="#524CA7" />
          <stop offset="0.4375" stop-color="#211C63" />
          <stop offset="1" stop-color="#0E0B3C" />
        </radialGradient>
        <linearGradient
          id="paint4_linear_1146_2681"
          x1="289.749"
          y1="314.929"
          x2="289.749"
          y2="617.583"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F2F2" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AccountBottom;
