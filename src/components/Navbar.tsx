"use client";
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4">
      <Link href="/">Home/About</Link>
     {/* <Link href="/about">About</Link> */}
      <Link href="/workshops">Workshops</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}