"use client"
import React, { useEffect, useState } from 'react'
import {MdLightMode} from'react-icons/md'
import {BsFillMoonFill} from'react-icons/bs'
import { useTheme } from 'next-themes'
export default function DarkMood (){
     const[mounted,setMounted]=useState(false)///add this line for handel difrent mood server and clinet
     const{systemTheme,theme,setTheme} = useTheme();
     useEffect(()=>setMounted(true),[])
     const curentTheme=theme=="system"?systemTheme:theme;
  return (
  <>
  {mounted&&(curentTheme=="dark"? <MdLightMode className='cursor-pointer hover:text-amber-500 text-2xl' onClick={()=>setTheme("light")}/>:<BsFillMoonFill className='cursor-pointer hover:text-amber-500 text-2xl' onClick={()=>setTheme("dark")}/>)}

  </>
  )
}
