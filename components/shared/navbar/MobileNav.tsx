'use client'

import {Button} from '@/components/ui/button'
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import {sidebarLinks} from '@/constants'
import {SignedOut} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'
import LogInButton from '../buttons/LogInButton'
import SignUpButton from '../buttons/SignUpButton'

const NavContent = () => {
  const pathname = usePathname()
  return (
    <section className='flex h-full flex-col gap-6 pt-16'>
      {sidebarLinks.map((item, index) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route
        return (
          <SheetClose key={index} asChild>
            <Link
              href={item.route}
              className={`${
                isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image src={item.imgURL} width={20} height={20} alt={item.label} className={`${isActive ? '' : 'invert-colors'}`} />
              <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>{item.label}</p>
            </Link>
          </SheetClose>
        )
      })}
    </section>
  )
}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src='/assets/icons/hamburger.svg' width={36} height={36} alt='Menu' className='invert-colors sm:hidden' />
      </SheetTrigger>
      <SheetContent side='left' className='background-light900_dark200 border-none'>
        <Link href='/' className='flex items-center gap-1'>
          <Image src='/assets/images/site-logo.svg' width={30} height={30} alt='devFlow' />
          <p className='h2-bold text-dark-100_light900'>
            Dev <span className='text-primary-500'>Flow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className='flex flex-col gap-3'>
              <SheetClose>
                <Link href='/sign-in'>
                  <LogInButton />
                </Link>
              </SheetClose>

              <SheetClose>
                <Link href='/sign-up'>
                  <SignUpButton />
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
