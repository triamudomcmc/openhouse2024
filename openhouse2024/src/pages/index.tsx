import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Image from "next/image";
import LoginPage from "./login";

export default function Home() {
  return (
    <LoginPage />
  );
}
