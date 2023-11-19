import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    // User email is available, make the API request
    router.push("/Login")
  }, []);

  return (
    <div>
      hello
    </div>
  );
}
