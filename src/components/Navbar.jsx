import React from 'react'
import { Camera } from 'lucide-react'
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-b border-gray-400 p-3'>
      <a href="#" className='flex item-center justify-center gap-2 text-2xl font-bold tracking-wide cursor-pointer'>
        <Camera className='text-blue-500 size-8 cursor-pointer' />
        <span>PicsHub</span>
      </a>

      <nav className='flex gap-6  cursor-pointer tracking-wide'>
         <FaLinkedinIn className='bg-blue-500 text-2xl size-11 p-2 rounded-full font-bold overflow-visible cursor-pointer' />
         <span className='bg-blue-500 rounded-3xl mr-10 p-1 w-16 h-10 mt-0.5 flex justify-center items-center font-bold '>Login</span>
      </nav>
    </div>
  )
}

export default Navbar