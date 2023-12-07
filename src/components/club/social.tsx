import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react";
import axios from 'axios';


export default function Social () {

    const [value,setValue] =useState('')
    const [isEditMode,setIsEditMode] =useState(false)
    const [ig, setIg] = useState('');  
    const [fb, setfb] = useState('')
    const [other, setOther] = useState('')
    const router = useRouter();

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          router.push('/login')// The user is not authenticated, handle it here.
        },
      });



    let data = ({
        "email": session?.user?.email
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/api/roles/info',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
  
      async function makeRequest() {
        try {
          const response = await axios.request(config);
          console.log(JSON.stringify(response.data.name));
          setIg(response.data.ig)
          setfb(response.data.facebook)
          setOther(response.data.others)
          setValue(response.data.ig)
          console.log("succes")
        }
        catch (error) {
            console.log(error);
          }
    }

    function turnOnEditMode() {
        setIsEditMode(true)

    }

    function handleInput (event:any) {
        setValue(event.target.value)

    }

    useEffect(() => {
        makeRequest()

    },[session])

    return(
        <div className=" flex justify-between items-center mt-32">
            <span>
                <input type="text"
                value={value}
                readOnly ={!isEditMode}
                onClick={turnOnEditMode}
                defaultValue="hello"
                onBlur={() => setIsEditMode(false)}
                onChange={handleInput}
                >
                

                </input>
            </span>

            <button>


            </button>
        </div>
    )
}