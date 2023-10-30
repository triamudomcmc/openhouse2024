"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "../../components/UserCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';
    
export default function Form() {

    const [info, setInfo] = useState('');
    const [clubInfo, setClubInfo] = useState('');
    const [programInfo, setProgramInfo] = useState('');
    const [type,setType] = useState("");
    const [club,setClub] = useState(Boolean);
    const [special,setspecial] = useState(Boolean);
    const [student,setStudent] = useState(Boolean);
    const [program,setProgram] = useState(Boolean);
    const [clubName,setClubName] = useState([])
    const [select,setSelect] = useState(false);
    const [name,setName] = useState("")
    const [error,setError] = useState(false)
    const [succes,setSucces] = useState(false)
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          router.push('/Login')// The user is not authenticated, handle it here.
        },
      });

    function handleTypeChange(event: SelectChangeEvent) {
      setInfo(event.target.value);
      typeCheck(event.target.value);
      setName("")
      clubRequest()
    };

    function handleClubChange(event: SelectChangeEvent) {
        setClubInfo(event.target.value);
        setName(event.target.value);
      };

    function handleProgramChange(event: SelectChangeEvent) {
        setProgramInfo(event.target.value);
        setName(event.target.value);
      };
    function typeCheck(type:string) {
        if (type === 'สายการเรียน') {  
        setProgram(true)
        setClub(false)
        setStudent(false)
        setspecial(false)
        setType('สายการเรียน')
        setSelect(true)
        setClubInfo('')
            }
            else if(type === 'ชมรม'){
                setClub(true)
                setProgram(false)
                setStudent(false)
                setspecial(false)
                setType('ชมรม')
                setSelect(true)
                setProgramInfo('')
            }
            else if(type === 'โครงการพัฒนาความสามารถ'){
              setClub(false)
              setProgram(false)
              setStudent(false)
              setspecial(true)
              setType('โครงการพัฒนาความสามารถ')
              setSelect(true)
              setProgramInfo('')
          }
          else if(type === 'องค์กรนักเรียน'){
            setClub(false)
            setProgram(false)
            setStudent(true)
            setspecial(false)
            setType('องค์กรนักเรียน')
            setSelect(true)
            setProgramInfo('')
        }
    }
    
    function handleSummit() {
        console.log(info);
        console.log(programInfo)
        console.log(clubInfo);
        console.log(name)
        makeRequest()
    }
    let data = JSON.stringify({
        "email": session?.user?.email,
        "tag": type,
        "name": name
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://openhouse2024-backend.vercel.app/api/roles/record',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      
      };
      
      async function makeRequest() {
        try {
          const response = await axios.request(config);
          console.log(JSON.stringify(response.data));
          setError(false)
          setSucces(true)
        }
        catch (error) {
          console.log(error);
          setError(true)
          setSucces(false)
        }
      }

      let clubconfig = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://openhouse2024-backend.vercel.app/api/clubs/lists',
        headers: { }
      };
      
      async function clubRequest() {
        try {
          const response = await axios.request(clubconfig);
          console.log(response.data)
          setClubName(response.data)
        }
        catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {

      })

      const clubselect = clubName.map((result) => 
                <MenuItem key={result} value={result}>{result}</MenuItem>
 )


    return(
    <>
    <div className=' bg-[#FFF9E9] h-screen backdrop-blur-xl '>
        <div className=" flex justify-center  ">
        <div className=" flex mt-16 w-3/4 md:w-1/2 lg:w-1/3 border border-slate-500 rounded-lg justify-center align-middle flex-wrap bg-white bg-opacity-50">
            <div className=' w-full flex justify-center my-5'>
                <p className=" flex align-middle ">กรอกข้อมูล</p>
            </div>
            <div className=' hidden md:flex'>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
                 }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    disabled
                    id="outlined"
                    label="email"
                    value={session?.user?.email}
                    defaultValue="..."
                />
            </Box>
            </div>
            <div className=' flex md:hidden'>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                 }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    disabled
                    id="outlined"
                    label="email"
                    value={session?.user?.email}
                    defaultValue="..."
                />
            </Box>
            </div>
            <div className=' w-3/5 flex align-middle justify-center items-center'>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" className=''>ประเภท</FormLabel>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="row-radio-buttons-group"
                        onChange={handleTypeChange}
                    >
                        <FormControlLabel value="สายการเรียน" control={<Radio />} label="สายการเรียน" />
                        <FormControlLabel value="ชมรม" control={<Radio />} label="ชมรม" />
                        <FormControlLabel value="โครงการพัฒนาความสามารถ" control={<Radio />} label="โครงการพัฒนาความสามารถ" />
                        <FormControlLabel value="องค์กรนักเรียน" control={<Radio />} label="องค์กรนักเรียน" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={program ? 'w-full flex align-middle justify-center my-5' : ' hidden'}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">สายการเรียน</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={programInfo}
                    onChange={handleProgramChange}
                    autoWidth
                    label="สายการเรียน"
                    defaultValue=''
                    >
                        <MenuItem value='สายการเรียนวิทยาศาสตร์-คณิตศาสตร์'>วิทยาศาสตร์-คณิตศาสตร์</MenuItem>
                        <MenuItem value='สายการเรียนภาษา-คณิตศาสตร์'>ภาษา-คณิตศาสตร์</MenuItem>
                        <MenuItem value='สายการเรียนภาษา-ภาษาฝรั่งเศส'>ภาษา-ภาษาฝรั่งเศส</MenuItem>
                        <MenuItem value='สายการเรียนภาษา-ภาษาเยอรมัน'>ภาษา-ภาษาเยอรมัน</MenuItem>
                        <MenuItem value='สายการเรียนภาษา-ภาษาญี่ปุ่น'>ภาษา-ภาษาญี่ปุ่น</MenuItem>
                        <MenuItem value='สายการเรียนภาษา-ภาษาจีน'>ภาษา-ภาษาจีน</MenuItem>
                        <MenuItem value='สายการเรียนภาษา-ภาษาสเปน'>ภาษา-ภาษาสเปน</MenuItem>
                        <MenuItem value='สายการเรียนภาษา-ภาษาเกาหลี'>ภาษา-ภาษาเกาหลี</MenuItem>
                    </Select>
            </FormControl>
            </div>
            <div className={club ? 'w-full flex align-middle justify-center my-5' : '  hidden'}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">ชมรม</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={clubInfo}
                    onChange={handleClubChange}
                    autoWidth
                    label="ชมรม"
                    >
                        {clubselect}
                    </Select>
            </FormControl>
            </div>
            <div className={special ? 'w-full flex align-middle justify-center my-5' : ' hidden'}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">โครงการพัฒนาความสามารถ</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={programInfo}
                    onChange={handleProgramChange}
                    autoWidth
                    label="โครงการพัฒนาความสามารถ"
                    defaultValue=''
                    >
                        <MenuItem value='โครงการพัฒนาความสามารถพิเศษด้านคณิตศาสตร์'>ความสามารถพิเศษด้านคณิตศาสตร์</MenuItem>
                        <MenuItem value='โครงการพัฒนาความสามารถพิเศษด้านวิทยาศาสตร์'>ความสามารถพิเศษด้านวิทยาศาสตร์</MenuItem>
                        <MenuItem value='โครงการพัฒนาความสามารถพิเศษด้านภาษาอังกฤษ'>ความสามารถพิเศษด้านภาษาอังกฤษ</MenuItem>
                        <MenuItem value='โครงการพัฒนาความสามารถพิเศษด้านภาษาไทย'>ความสามารถพิเศษด้านภาษาไทย</MenuItem>
                    </Select>
            </FormControl>
            </div>
            <div className={student ? 'w-full flex align-middle justify-center my-5' : ' hidden'}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">องค์กรนักเรียน</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={programInfo}
                    onChange={handleProgramChange}
                    autoWidth
                    label="องค์กรนักเรียน"
                    defaultValue=''
                    >
                        <MenuItem value='คณะกรรมการนักเรียน (กน.)'>คณะกรรมการนักเรียน</MenuItem>
                        <MenuItem value='นักเรียนผู้ช่วยงานประชาสัมพันธ์ (ปชส.)'>นักเรียนผู้ช่วยงานประชาสัมพันธ์</MenuItem>
                        <MenuItem value='กลุ่มนักเรียน AIC (กอ.)'>กลุ่มนักเรียนเอไอซี</MenuItem>
                    </Select>
            </FormControl>
            </div>
            <div className={select ? ' hidden' : ' w-full flex align-middle justify-center my-5'}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label" disabled>สายการเรียน</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={programInfo}
                    onChange={handleProgramChange}
                    autoWidth
                    label="สายการเรียน"
                    disabled
                    >
                    </Select>
            </FormControl>
            </div>
            <div className=' block my-5'>
                <Button variant="outlined" onClick={handleSummit}>sumit</Button>
            </div>
            
        </div>
        
        </div>
        <div className={succes ? ' fixed bottom-4 right-1 w-full justify-end flex ' : 'hidden'} >
            <div className='w-1/2 md:1/3 lg:w-1/4 flex justify-end'>
                <Alert className=' w-full' severity="success">
                    <AlertTitle>Success</AlertTitle>
                    ระบบได้บันทึกข้อมูลแล้ว
                 </Alert>
            </div>
        </div>
        <div className={error ? 'fixed bottom-4 right-1 w-full justify-end flex ' : 'hidden'}>
            <div className=' w-1/2 md:1/3 lg:w-1/4 flex justify-end'>
            <Alert className='w-full' severity="error">
                <AlertTitle>error</AlertTitle>
                โปรดตรวจสอบข้อมูลและบัญชีให้ถูกต้อง
            </Alert>
            </div>
            </div>
            </div>
            </>
    )
}