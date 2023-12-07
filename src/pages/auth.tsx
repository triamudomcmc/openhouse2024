import { useState , useEffect } from "react"
import { useSession } from "next-auth/react"
import { Router, useRouter } from "next/router";

export default function Auth () {
    const router = useRouter()
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
          router.push("/login"); // The user is not authenticated, handle it here.
        },
      });

      useEffect(() => {
        makeRequest();
      }, [status]);

      function makeRequest (){
        if (status === "authenticated" ) {
            console.log('it work')
        } else{
            console.log('it doesnt')
        }
      }


    return (
        <>hello</>
    )
}