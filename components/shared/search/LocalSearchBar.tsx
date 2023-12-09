'use client'

import Image from 'next/image'
import React from 'react'
import {Input} from '../../ui/input'

interface LocalSearchBarProps {
  route: string
  iconPosition?: string
  imgSrc?: string
  placeholder?: string
  classes?: string
}

const LocalSearchBar = ({
  route,
  iconPosition = 'left',
  imgSrc = '/assets/icons/search.svg',
  placeholder = 'Search for questions',
  classes
}: LocalSearchBarProps) => {
  return (
    <>
      <div className={`background-light800_darkgradient flex w-full min-h-[56px] items-center grow gap-4 rounded-xl px-4 ${classes}}`}>
        {iconPosition === 'left' ? <Image src={imgSrc} alt='Search' width={24} height={24} className='cursor-pointer' /> : null}
        <Input
          type='text'
          placeholder={placeholder}
          value=''
          onChange={() => {}}
          className='paragraph-regular no-focus bg-transparent border-none shadow-none outline-none placeholder no-focus'
        ></Input>

        {iconPosition === 'right' ? <Image src={imgSrc} alt='Search' width={24} height={24} className='cursor-pointer' /> : null}
      </div>
    </>
  )
}

export default LocalSearchBar
