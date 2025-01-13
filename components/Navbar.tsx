import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { NAV_LINKS } from '../constants/index'
import Button from './Button'


const Navbar = () => {
  return (
    <div className="bg-black">
      <Link href="/">
        <Image src="\hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hiddden h-full gap-12 Sflex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >{link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button />
      </div>
    </div>
  )
}

export default Navbar

