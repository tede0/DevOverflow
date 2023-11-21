'use client'

import {sidebarLinks} from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'

const SidebarContent = () => {
  const pathname = usePathname()
  return (
    <section className='flex flex-col gap-6 h-full pt-16'>
      {sidebarLinks.map((link, index) => {
        const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route
        return (
          <Link href={link.route} className='flex'>
            <Image src={link.imgURL} width={20} height={20} alt={link.label} />
            <p>{link.label}</p>
          </Link>
        )
      })}
    </section>
  )
}

const LeftSideBar = () => {
  return (
    <div className='w-fit background-light900_dark200'>
      <SidebarContent />
    </div>
  )
}

export default LeftSideBar
