import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import  DarkMood  from './DarkMood'
import { MenuItem } from './MenuItem'
export const Heder = () => {
     return (
          <div className='flex justify-between mx-auto max-w-6xl  items-center my-6'>
               <div className='flex'>
                    <MenuItem title="Home" addres='/' Icon={AiFillHome} />
                    <MenuItem title="About" addres='/about' Icon={FcAbout} />
               </div>
               <div className='flex items-center space-x-5'>
                    <DarkMood/>
                    <Link href='/' className='align-bottom'><h2><span className='py-1 px-3 bg-amber-500 rounded font-bold mr-1'>IMDb</span><span className='text-xl hidden sm:inline '>clone</span></h2></Link>
               </div>
          </div>
     )
}
