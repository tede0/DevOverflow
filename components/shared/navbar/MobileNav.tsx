import {Button} from '@/components/ui/button'
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import {SignedOut} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavContent = () => {
  return <h1>NavContent</h1>
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
                  <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                    <span className='primary-text-gradient'>Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose>
                <Link href='/sign-up'>
                  <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                    Sign Up
                  </Button>
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
