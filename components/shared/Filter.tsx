'use client'

import {Select, SelectContent, SelectGroup, SelectTrigger, SelectValue} from '@/components/ui/select'
import {SelectItem} from '@radix-ui/react-select'
import React from 'react'

interface Filter {
  name: string
  value: string
}

interface FilterProps {
  filters: Filter[]
  otherClasses?: string
  containerClasses?: string
}

const Filter = ({filters, otherClasses, containerClasses}: FilterProps) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className='line-clamp-1 flex-1 text-left'>
            <SelectValue placeholder='Select a filter' />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((filter, index) => (
              <SelectItem key={index} value={filter.value}>
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter
