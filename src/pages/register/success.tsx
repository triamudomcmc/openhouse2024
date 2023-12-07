import Router, { useRouter } from "next/router";
import { ArrowLeftCircleIcon,CheckCircleIcon } from "@heroicons/react/24/outline";

export default function RegisterSucess() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full h-[calc(100dvh)]">
      <div className="flex flex-col items-center">
        <div
          onClick={() => {
            router.push("/account");
          }}
          className="flex items-center cursor-pointer"
        >
          <ArrowLeftCircleIcon className="w-7 h-7" />
          <span className="ml-2">กลับไปหน้าบัญชี</span>
        </div>
        <CheckCircleIcon className="w-3/5 text-green-500" />
        <p className="text-center">register success</p>
      </div>
    </div>
  );
}
