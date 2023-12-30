import React, { FC } from "react";

const GemStar: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="40"
      height="50"
      className={`${className}`}
      viewBox="0 0 83 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82.5912 43.6906C47.4158 50.8071 45.3255 53.7982 46.7096 95.0346C39.4693 54.4152 36.8014 51.9254 0.915287 52.2961C36.0907 45.1797 38.181 42.1885 36.797 0.952159C44.0373 41.5715 46.7051 44.0613 82.5912 43.6906Z"
        fill="white"
      />
    </svg>
  );
};

export default GemStar;
