import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="width-[500px] pt-20">
      <p>Home page</p>
    </div>
  );
}
