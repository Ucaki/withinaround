"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  
    <header className="w-screen bg-[#1A5F7A] text-white p-1  flex items-center fixed h-16 sm:h-22">
      <div className="relative w-24 h-12 sm:w-32 md:w-44 sm:h-16 md:h-20 mx-2 my-auto mr-20">
               <Link href='/'><Image
                 src="/withinaroundLogo.png"
                 alt="Yoga practice"
                 fill
                 className="object-contain "
               /></Link>
      </div>
    
       <button
          className="sm:hidden text-white ml-auto mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
     
      <nav className='hidden items-center sm:flex font-semibold '>
        <ul className='flex flex-nowrap whitespace-nowrap justify-center gap-10'>
          <li><Link href="/#about-section" className='hover:text-slate-400'>About</Link></li>
          <li><Link href="/#workshop-section" className='hover:text-slate-400'>Workshops</Link></li>
          <li><Link href="/#blog-section" className='hover:text-slate-400'>Blog</Link></li>
        </ul>
      </nav>

      {menuOpen && (
        //"sm:hidden flex flex-col items-center bg-[#1A5F7A] py-1 px-1 justify-around font-semibold text-xs"
        <nav className="absolute top-16 left-[50%] w-2/4 bg-[#1A5F7A] z-50 flex flex-col items-start pl-10  h-200 gap-6 text-white">
          <ul>
            <li ><Link onClick={() => setMenuOpen(false)} href="/#about-section" className='hover:text-slate-400'>About</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} href="/#workshop-section" className='hover:text-slate-400'>Workshops</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} href="/#blog-section" className='hover:text-slate-400'>Blog</Link></li>
        </ul>
        </nav>
      )}
      
    </header>
  )
}