import Image from 'next/image'
import React from 'react'
import {Button} from '../ui/button'

interface QuestionCardProps {
  title: string
  tags: string[]
  author: string
  dateAsked: Date
  numberOfVotes: number
  numberOfAnswers: number
  numberOfViews: number
}

const QuestionCard = ({title, tags, author, dateAsked, numberOfVotes, numberOfAnswers, numberOfViews}: QuestionCardProps) => {
  return (
    <div className='background-light800_darkgradient rounded-lg p-8'>
      <div className='line-clamp-1 text-lg font-bold dark:text-white'>{title}</div>
      <div className='mt-3 flex gap-3'>
        {tags.map((tag, index) => (
          <Button
            key={index}
            className='body-medium text-xs px-6 py-3 bg-light-800 dark:bg-dark-300 text-light-500 rounded-lg capitalize shadow-none'
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className='flex justify-between mt-5 text-sm dark:text-white'>
        {author} | {dateAsked.toUTCString()}
        <div className='flex items-center gap-1'>
          <Image src='/assets/icons/like.svg' alt='upvote' width={16} height={16} />
          <div className='text-xs'>{numberOfVotes} Votes</div>
          <Image src='/assets/icons/message.svg' alt='upvote' width={16} height={16} />
          <div className='text-xs'>{numberOfAnswers} Comments</div>
          <Image src='/assets/icons/eye.svg' alt='upvote' width={16} height={16} />
          <div className='text-xs'>{numberOfViews} Views</div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
