"use client";

//import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  
    <header className="w-screen bg-yellow-800 text-white p-1  flex items-center fixed">
      <div className="relative w-24 h-12 sm:w-32 md:w-44 sm:h-16 md:h-20 mx-2 my-auto mr-20">
               <Image
                 src="/withinaroundLogo.png"
                 alt="Yoga practice"
                 fill
                 className="object-contain "
               />
      </div>
    
       <button
          className="sm:hidden text-white ml-auto mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
     
      <nav className='hidden items-center sm:flex font-semibold '>
        <ul className='flex flex-nowrap whitespace-nowrap justify-center gap-10'>
          <li><a href="#about-section" className='hover:text-slate-400'>About</a></li>
          <li><a href="#workshop-section" className='hover:text-slate-400'>Workshops</a></li>
          <li><a href="" className='hover:text-slate-400'>Blog</a></li>
        </ul>
      </nav>

      {menuOpen && (
        <nav className="sm:hidden flex flex-col items-center bg-yellow-800 py-1 px-1 font-semibold text-xs">
          <ul >
            <li><a onClick={() => setMenuOpen(false)} href="#about-section" className='hover:text-slate-400'>About</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#workshop-section" className='hover:text-slate-400'>Workshops</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="" className='hover:text-slate-400'>Blog</a></li>
        </ul>
        </nav>
      )}
      
    </header>
  )
}