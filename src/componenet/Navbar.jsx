import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center space-x-4 dark:bg-gray-800 bg-amber-100 lg:text-lg p-4 '>
     <NavbarItem title="Trending" param='fetchTrending'/>
     <NavbarItem title="Top Rated" param='fetchTopRated'/>
    </div>
  )
}
