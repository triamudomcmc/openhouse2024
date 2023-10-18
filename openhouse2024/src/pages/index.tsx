import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Image from "next/image";
import { Inter } from "next/font/google";
import LoginComponents from "./Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="width-[500px] pt-[30px]">
      <h3>Login System</h3>
      <LoginComponents />
    </div>
  );
}
