import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function AddStaff() {
  const [id, setId] = useState("");
  const [tag, setTag] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [isStamp, setIsStamp] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [success,setSuccess] = useState(false)
  const [failed,setFailed] = useState(false)

  let data = JSON.stringify({
    id: id,
    tag: tag,
    organizationName: organizationName,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/add-staff",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function makeRequest() {
    try {
      
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      setSuccess(true)
      setFailed(false)

      setTimeout(() => {
        setSuccess(false)
      }, 3000);
    } catch (error) {
      console.log(error);
      setSuccess(false)
      setFailed(true)
    }
  }

  useEffect(() => {
    if (tag === "register") {
      setIsRegister(true);
      setIsStamp(false);
    } if (tag === "stamp") {
      setIsRegister(false);
      setIsStamp(true);
    }
    setOrganizationName
  }, [tag]);
  return (
    <div className=" w-screen min-h-screen bg-gradient-to-b from-[#6D1490] to-[#623AD4] ">
      <div className=" flex items-center md:pl-28 md:pt-28 pl-8 pt-24 gap-2 md:text-xl text-base w-fit ">
        <Link href="/account" className=" flex items-center gap-1">
          <ArrowLeftCircleIcon className=" md:w-8 w-6 text-white" />
          <span className=" text-white">ย้อนกลับ</span>
        </Link>
      </div>
      <div className=" flex justify-center">
        <div className=" mt-2 text-center">
          <div className=" w-[300px] bg-white rounded-2xl px-6 py-6 ">
            <TextField
              id="outlined-basic"
              fullWidth
              label="Id"
              variant="outlined"
              type="number"
              onChange={(event: any) => {
                setId(event.target.value);
              }}
            />
            <div className=" w-full mt-6">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tag}
                  label="Type"
                  onChange={(event: any) => {
                    setTag(event.target.value);
                  }}
                >
                  <MenuItem value="register">ลงทะเบียน</MenuItem>
                  <MenuItem value="stamp">แสตมป์</MenuItem>
                </Select>
              </FormControl>
            </div>
            {isRegister && (
              <div className=" mt-6">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gate</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={organizationName}
                    label="Gate"
                    onChange={(event: any) => {
                      setOrganizationName(event.target.value);
                    }}
                  >
                    <MenuItem value="พญาไท">พญาไท</MenuItem>
                    <MenuItem value="อังรีดูนังต์">อังรีดูนังต์</MenuItem>
                    <MenuItem value="ประตูเทา">ประตูเทา</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}

            {isStamp && (
              <div className=" mt-6">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Organization name"
                  variant="outlined"
                  onChange={(event: any) => {
                    setOrganizationName(event.target.value);
                  }}
                />
              </div>
            )}
            <button
              onClick={() => {
                makeRequest();
              }}
              className=" text-white font-Montserrat text-xl font-bold text-center px-6 py-2 bg-[#FC53C3] rounded-xl mt-6  "
            >
              Add
            </button>
            {success && <div className="mt-4 text-green-500">บันทึกสำเร็จ</div>}
              {failed && <div className="mt-4 text-red-500">บันทึกไม่สำเร็จ</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
