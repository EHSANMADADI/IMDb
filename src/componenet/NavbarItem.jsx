'use client'
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'
export default function NavbarItem({title,param}) {
     const searchparam=useSearchParams();///when use dis hook shold use "use client"
     const gener=searchparam.get('genre')
  return (
    <div>
     <Link className={`m-4 hover:text-amber-600 font-semibold p-2 ${gener&&gener==param&&"underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`} href={`/gener=${param}`}>{title}</Link>
    
    </div>
  )
}
