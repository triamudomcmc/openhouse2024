"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function LoginComponents() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
        router.push('/account')
      }
    }
    )

    return (
      <>
    <div className="flex items-center justify-center h-screen z-10">
      
        <button onClick={() => signIn('google')} 
        className="px-4 py-2 border flex gap-2 border-slate-200 bg-white backdrop-blur-sm rounded-lg text-slate-700  hover:border-slate-400  hover:text-slate-900 hover:shadow transition duration-150">
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
            <span>Login with Google</span>
        </button>
    </div>
    </>
    );
  }
