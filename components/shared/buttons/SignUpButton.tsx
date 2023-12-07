import {Button} from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const SignUpButton = () => {
  return (
    <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
      <Image src='/assets/icons/sign-up.svg' alt='signup' width={20} height={20} className='invert-colors lg:hidden' />
      <span className='max-lg:hidden'>Sign Up</span>
    </Button>
  )
}

export default SignUpButton
