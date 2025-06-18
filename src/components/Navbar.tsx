"use client";
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-yellow-800 text-white p-1 flex gap-19 mb-0.25 fixed container">
     <div className="relative w-45 h-16 mx-2 my-1">
               <Image
                 src="/withinaroundLogo.png"
                 alt="Yoga practice"
                 fill
                 className="object-contain"
               />
      </div>
     <div className="flex p-3 gap-10 font-semibold items-center text-slate-100 " >
        <Link className="hover:text-slate-400" href="/">Home/About</Link>
      {/* <Link href="/about">About</Link> */}
        <Link className="hover:text-slate-400" href="/workshops">Workshops</Link>
        <Link className="hover:text-slate-400" href="/blog">Blog</Link>
      </div>
    </nav>
  )
}