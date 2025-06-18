"use client";
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-yellow-900 text-white p-1 flex gap-19">
     <div style={{ width : '16%', height: '1%'}}>
               <Image
                 src="/withinaroundLogo.png"
                 alt="Yoga practice"
                 width={600}
                 height={150}
               />
      </div>
     <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '18%'}}>
        <Link href="/">Home/About</Link>
      {/* <Link href="/about">About</Link> */}
        <Link href="/workshops">Workshops</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  )
}