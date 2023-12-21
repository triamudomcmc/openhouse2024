import { FC } from "react";

export const X: FC<{ fill?: string; className?: string }> = ({
  fill = "#E9B5ED",
  className,
}) => {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="3" fill="#E9B5ED" />
      <path
        d="M22 42C33.0457 42 42 33.0457 42 22C42 10.9543 33.0457 2 22 2C10.9543 2 2 10.9543 2 22C2 33.0457 10.9543 42 22 42Z"
        fill={fill}
      />
      <path
        d="M9.67997 10.4126L19.2397 23.1947L9.61972 33.5871H11.785L20.2075 24.4882L27.0124 33.5871H34.3803L24.2824 20.0862L33.2368 10.4126H31.0715L23.3151 18.7923L17.0479 10.4126H9.67997ZM12.8641 12.0073H16.2489L31.1958 31.9924H27.811L12.8641 12.0073Z"
        fill="#2C1865"
      />
    </svg>
  );
};
