'use client'

import {sidebarLinks} from '@/constants'
import {SignedOut} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'
import LogInButton from '../buttons/LogInButton'
import SignUpButton from '../buttons/SignUpButton'

const LeftSideBar = () => {
  const pathname = usePathname()
  return (
    <section className='background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((item, index) => {
          const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route
          return (
            <Link
              key={index}
              href={item.route}
              className={`${
                isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image src={item.imgURL} width={20} height={20} alt={item.label} className={`${isActive ? '' : 'invert-colors'}`} />
              <p className={`${isActive ? 'base-bold' : 'base-medium'} max-lg:hidden`}>{item.label}</p>
            </Link>
          )
        })}
      </div>

      <SignedOut>
        <div className='flex flex-col gap-3'>
          <Link href={'/sign-in'}>
            <LogInButton />
          </Link>

          <Link href={'/sign-up'}>
            <SignUpButton />
          </Link>
        </div>
      </SignedOut>
    </section>
  )
}

export default LeftSideBar
