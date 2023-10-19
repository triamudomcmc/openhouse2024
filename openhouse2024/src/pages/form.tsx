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
import { UserCard } from "../components/UserCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
    
export default function Form() {

    const [info, setInfo] = useState('');
    const [clubInfo, setClubInfo] = useState('');
    const [programInfo, setProgramInfo] = useState('');
    const [type,setType] = useState('');
    const [club,setClub] = useState(Boolean);
    const [program,setProgram] = useState(Boolean);
    const [select,setSelect] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/login')
          }
        }
        )

    function handleTypeChange(event: SelectChangeEvent) {
      setInfo(event.target.value);
      typeCheck(event.target.value);
    };

    function handleClubChange(event: SelectChangeEvent) {
        setClubInfo(event.target.value);
        
      };

    function handleProgramChange(event: SelectChangeEvent) {
        setProgramInfo(event.target.value);
        
      };
    function typeCheck(type:string) {
        if (type === 'สายการเรียน') {  
        setProgram(true)
        setClub(false)
        setType('สายการเรียน')
        setSelect(true)
        setClubInfo('')
            }
            else if(type === 'ชมรม'){
                setClub(true)
                setProgram(false)
                setType('ชมรม')
                setSelect(true)
                setProgramInfo('')
            }
            else {
            }
    }
    
    function handleSummit() {
        console.log(info);
        console.log(programInfo)
        console.log(clubInfo);
    }
    return(
        <div className=" flex justify-center">
        <div className=" flex h-96 mt-16 w-2/3 md:w-1/2 lg:w-1/3 border border-slate-500 rounded-lg justify-center align-middle flex-wrap">
            <div className=' w-full flex justify-center'>
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
                    id="outlined-disabled"
                    label="email"
                    defaultValue={session?.user?.email}
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
                    id="outlined-disabled"
                    label="email"
                    defaultValue={session?.user?.email}
                />
            </Box>
            </div>
            <div className=' w-full flex align-middle justify-center'>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">ประเภท</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                        onChange={handleTypeChange}
                    >
                        <FormControlLabel value="สายการเรียน" control={<Radio />} label="สายการเรียน" />
                        <FormControlLabel value="ชมรม" control={<Radio />} label="ชมรม" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={program ? 'w-full flex align-middle justify-center' : ' hidden'}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">สายการเรียน</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={programInfo}
                    onChange={handleProgramChange}
                    autoWidth
                    label="สายการเรียน"
                    >
                        <MenuItem value='วิทยาศาสตร์-คณิตศาสตร์'>วิทยาศาสตร์-คณิตศาสตร์</MenuItem>
                        <MenuItem value='ภาษา-คณิตศาสตร์'>ภาษา-คณิตศาสตร์</MenuItem>
                        <MenuItem value='ภาษา-ภาษาฝรั่งเศส'>ภาษา-ภาษาฝรั่งเศส</MenuItem>
                        <MenuItem value='ภาษา-ภาษาเยอรมัน'>ภาษา-ภาษาเยอรมัน</MenuItem>
                        <MenuItem value='ภาษา-ภาษาญี่ปุ่น'>ภาษา-ภาษาญี่ปุ่น</MenuItem>
                        <MenuItem value='ภาษา-ภาษาจีน'>ภาษา-ภาษาจีน</MenuItem>
                        <MenuItem value='ภาษา-ภาษาสเปน'>ภาษา-ภาษาสเปน</MenuItem>
                        <MenuItem value='ภาษา-ภาษาเกาหลี'>ภาษา-ภาษาเกาหลี</MenuItem>
                        <MenuItem value='ความสามารถพิเศษด้านคณิตศาสตร์'>ความสามารถพิเศษด้านคณิตศาสตร์</MenuItem>
                        <MenuItem value='ความสามารถพิเศษด้านวิทยาศาสตร์'>ความสามารถพิเศษด้านวิทยาศาสตร์</MenuItem>
                        <MenuItem value='ความสามารถพิเศษด้านภาษาอังกฤษ'>ความสามารถพิเศษด้านภาษาอังกฤษ</MenuItem>
                        <MenuItem value='ความสามารถพิเศษด้นภาษาไทย'>ความสามารถพิเศษด้นภาษาไทย</MenuItem>
                    </Select>
            </FormControl>
            </div>
            <div className={club ? 'w-full flex align-middle justify-center' : '  hidden'}>
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
                        <MenuItem value='คณิตศาสตร์ (A-Math)'>คณิตศาสตร์ (A-Math)</MenuItem>
                        <MenuItem value='คณิตศาสตร์ (E-Sport)'>คณิตศาสตร์ (E-Sport)</MenuItem>
                        <MenuItem value='คณิตศาสตร์ (หมากล้อม)'>คณิตศาสตร์ (หมากล้อม)</MenuItem>
                        <MenuItem value='วิทยาศาสตร์'>วิทยาศาสตร์</MenuItem>
                        <MenuItem value='สังคมศึกษา (ภาคีสังคมศึกษา)'>สังคมศึกษา (ภาคีสังคมศึกษา)</MenuItem>
                        <MenuItem value='สังคมศึกษา (หลากทัศนะประวัติศาสตร์)'>สังคมศึกษา (หลากทัศนะประวัติศาสตร์)</MenuItem>
                        <MenuItem value='สังคมศึกษา (หนังสังคม)'>สังคมศึกษา (หนังสังคม)</MenuItem>
                        <MenuItem value='สังคมศึกษา (TU Activists)'>สังคมศึกษา (TU Activists)</MenuItem>
                        <MenuItem value='สังคมศึกษา (พระพุทธศาสนา)'>สังคมศึกษา (พระพุทธศาสนา)</MenuItem>
                        <MenuItem value='ภาษาไทย'>ภาษาไทย</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (MUN)'>ภาษาอังกฤษ (MUN)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (Public Speaking)'>ภาษาอังกฤษ (Public Speaking)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (Quiz)'>ภาษาอังกฤษ (Quiz)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (Oracle)'>ภาษาอังกฤษ (Oracle)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (Language and Intercultural Communication)'>ภาษาอังกฤษ (Language and Intercultural Communication)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (English Movie Club M.4-6)'>ภาษาอังกฤษ (English Movie Club M.4-6)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (English MC)'>ภาษาอังกฤษ (English MC)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (English Story Telling M.4-5)'>ภาษาอังกฤษ (English Story Telling M.4-5)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (English Drama)'>ภาษาอังกฤษ (English Drama)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (Debate)'>ภาษาอังกฤษ (Debate)</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (Crossword)'>ภาษาอังกฤษ (Crossword)</MenuItem>
                        <MenuItem value='English Skills (Vocabulary) M.4'>English Skills (Vocabulary) M.4</MenuItem>
                        <MenuItem value='ภาษาอังกฤษ (นักเรียนแลกเปลี่ยน)'>ภาษาอังกฤษ (นักเรียนแลกเปลี่ยน)</MenuItem>
                        <MenuItem value='ภาษาฝรั่งเศส'>ภาษาฝรั่งเศส</MenuItem>
                        <MenuItem value='ภาษาเยอรมัน'>ภาษาเยอรมัน</MenuItem>
                        <MenuItem value='ภาษาญี่ปุ่น'>ภาษาญี่ปุ่น</MenuItem>
                        <MenuItem value='ห้องสมุด'>ห้องสมุด</MenuItem>
                        <MenuItem value='ห้องสมุด (บอร์ดเกม)'>ห้องสมุด (บอร์ดเกม)</MenuItem>
                        <MenuItem value='ศาสนาและวัฒนธรรมไทย'>ศาสนาและวัฒนธรรมไทย</MenuItem>
                        <MenuItem value='นาฏศิลป์'>นาฏศิลป์</MenuItem>
                        <MenuItem value='วาทศิลป์'>วาทศิลป์</MenuItem>
                        <MenuItem value='วรรณศิลป์ต.อ.'>วรรณศิลป์ต.อ.</MenuItem>
                        <MenuItem value='ดนตรีไทย'>ดนตรีไทย</MenuItem>
                        <MenuItem value='ดนตรีสากล'>ดนตรีสากล</MenuItem>
                        <MenuItem value='ศิลปศึกษา'>ศิลปศึกษา</MenuItem>
                        <MenuItem value='ดุริยางค์'>ดุริยางค์</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (ฟุตบอล)'>นันทนาการกีฬา (ฟุตบอล)</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (วอลเลย์บอล)'>นันทนาการกีฬา (วอลเลย์บอล)</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (บาสเกตบอล)'>นันทนาการกีฬา (บาสเกตบอล)</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (เทนนิส)'>นันทนาการกีฬา (เทนนิส)</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (แบดมินตัน)'>นันทนาการกีฬา (แบดมินตัน)</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (ลีลาศ)'>นันทนาการกีฬา (ลีลาศ)</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (เบ็ดเตล็ด)'>นันทนาการกีฬา (เบดเตล็ด)</MenuItem>
                        <MenuItem value='นันทนาการกีฬา (ผู้นําเชียร์โรงเรียน)'>นันทนาการกีฬา (ผู้นําเชียร์โรงเรียน)</MenuItem>
                        <MenuItem value='หมากกระดาน'>หมากกระดาน</MenuItem>
                        <MenuItem value='ผู้บําเพญประโยชน์'>ผู้บําเพญประโยชน์</MenuItem>
                        <MenuItem value='ผู้นําเยาวชนสาธารณสุขฯ'>ผู้นําเยาวชนสาธารณสุขฯ</MenuItem>
                        <MenuItem value='อนุรักษ์ธรรมชาติฯ'>อนุรักษ์ธรรมชาติฯ</MenuItem>
                        <MenuItem value='เพาะพันธุ์ไม้'>เพาะพันธุ์ไม้</MenuItem>
                        <MenuItem value='คอมพิวเตอร์'>คอมพิวเตอร์</MenuItem>
                        <MenuItem value='ถ่ายภาพ'>ถ่ายภาพ</MenuItem>
                        <MenuItem value='สิ่งละอันพันละน้อย'>สิ่งละอันพันละน้อย</MenuItem>
                        <MenuItem value='ขับร้องประสานเสียง'>ขับร้องประสานเสียง</MenuItem>
                        <MenuItem value='สร้างสรรค์หนังสือ'>สร้างสรรค์หนังสือ</MenuItem>
                        <MenuItem value='การ์ตูน'>การ์ตูน</MenuItem>
                        <MenuItem value='นิเทศศิลป'>นิเทศศิลป</MenuItem>
                        <MenuItem value='พัฒนาศักยภาพทางวิทยาศาสตร์'>พัฒนาศักยภาพทางวิทยาศาสตร์</MenuItem>
                        <MenuItem value='ของเล่นเพื่อการเรียนรู้'>ของเล่นเพื่อการเรียนรู้</MenuItem>
                        <MenuItem value='ภาพยนตร์สั้นและสื่อโทรทัศน์'>ภาพยนตร์สั้นและสื่อโทรทัศน์</MenuItem>
                        <MenuItem value='ภาพยนตร์สั้นและสื่อโทรทัศน์ (ผลิตสื่อ)'>ภาพยนตร์สั้นและสื่อโทรทัศน์ (ผลิตสื่อ)</MenuItem>
                        <MenuItem value='เศรษฐศาสตร์'>เศรษฐศาสตร์</MenuItem>
                        <MenuItem value='เศรษฐศาสตร์ (บริหารธุรกิจ)'>เศรษฐศาสตร์ (บริหารธุรกิจ)</MenuItem>
                        <MenuItem value='ภาษาสเปน'>ภาษาสเปน</MenuItem>
                        <MenuItem value='สันทนากร'>สันทนากร</MenuItem>
                        <MenuItem value='โลกศาสตร์'>โลกศาสตร์</MenuItem>
                        <MenuItem value='เพื่อนที่ปรึกษา'>เพื่อนที่ปรึกษา</MenuItem>
                        <MenuItem value='ภาษาจีน'>ภาษาจีน</MenuItem>
                        <MenuItem value='ภาษาเกาหลี'>ภาษาเกาหลี</MenuItem>
                    </Select>
            </FormControl>
            </div>
            <div className={select ? ' hidden' : ' w-full flex align-middle justify-center'}>
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
            <div className=' block'>
                <Button variant="outlined" onClick={handleSummit}>sumit</Button>
            </div>
        </div>
        </div>

    )
}