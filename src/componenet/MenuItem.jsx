import Link from 'next/link'
import React from 'react'

export const MenuItem = ({ title, addres, Icon }) => {
     return (
          <div>
               <Link href={addres} className="mx-5 hover:text-amber-600">
                    <Icon className='text-2xl sm:hidden mx-5'/>
                    <p className='hidden sm:inline my-2 text-sm'>{title}</p>
               </Link>
          </div>
     )
}
