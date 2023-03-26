import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { MenuItem } from './MenuItem'
export const Heder = () => {
     return (
          <div className='flex justify-between mx-5 max-w-6xl  items-center'>
               <div className='flex'>
                    <MenuItem title="Home" addres='/' Icon={AiFillHome} />
                    <MenuItem title="About" addres='/about' Icon={FcAbout} />
               </div>
               <div>
                    <Link href='/' className='align-bottom'><h2><span className='py-1 px-3 bg-amber-500 rounded font-bold mr-1'>IMDb</span><span className='text-xl hidden sm:inline '>clone</span></h2></Link>
               </div>
          </div>
     )
}
