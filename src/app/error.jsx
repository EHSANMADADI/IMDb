'use client'

import React from 'react'
import { useEffect } from 'react'
export default function Error({error,reset}) {

     useEffect((error)=>{console.log(error)},[error])
  return (
    <div className=' mx-auto border max-w-md p-5 text-center mt-12 space-y-5'>
     <h1 className='text-red-300'>Somthimg Went Wrong</h1>
     <button onClick={()=>reset()} className='hover:text-amber-500 bg-slate-700 p-3 px-5 rounded-3xl'>Reset</button>
    </div>
  )
}
