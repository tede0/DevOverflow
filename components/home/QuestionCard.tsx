import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import RenderTag from '../shared/RenderTag'
import Metric from '../shared/Metric'
import { formatNumber, getTimestamp } from '@/lib/utils'

interface QuestionCardProps {
  _id: number
  title: string
  tags: { _id: number; name: string }[]
  author: {
    _id: number
    name: string
    picture: string
  }
  createdAt: Date
  upvotes: number
  answers: { answer: string }[]
  views: number
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  createdAt,
  upvotes,
  answers,
  views,
}: QuestionCardProps) => {
  const timestamp = getTimestamp(createdAt)

  return (
    <div className='card-wrapper rounded-[10px] p-9 sm:p-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
            {timestamp}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className='mt-3.5 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className='flex-between mt-6 w-full flex-wrap gap-3'>
        <Metric
          imgUrl='/assets/icons/avatar.svg'
          alt='user'
          value={author.name}
          title={` - asked ${timestamp}`}
          href={`/pofile/${author._id}`}
          isAuthor
          textStyles='body-medium text-dark400_light700'
        />

        <Metric
          imgUrl='/assets/icons/like.svg'
          alt='Upvotes'
          value={formatNumber(upvotes)}
          title=' Votes'
          textStyles='small-medium text-dark400_light800'
        />

        <Metric
          imgUrl='/assets/icons/message.svg'
          alt='message'
          value={formatNumber(answers.length)}
          title=' Answers'
          textStyles='small-medium text-dark400_light800'
        />

        <Metric
          imgUrl='/assets/icons/eye.svg'
          alt='views'
          value={formatNumber(views)}
          title=' Views'
          textStyles='small-medium text-dark400_light800'
        />
      </div>
    </div>
  )
}

export default QuestionCard
