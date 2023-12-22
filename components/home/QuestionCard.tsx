import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface QuestionCardProps {
  title: string;
  tags: { _id: number; name: string }[];
  author: string;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}

const QuestionCard = ({
  title,
  tags,
  author,
  createdAt: dateAsked,
  upvotes: numberOfVotes,
  answers: numberOfAnswers,
  views: numberOfViews,
}: QuestionCardProps) => {
  return (
    <div className="background-light800_darkgradient rounded-lg p-8">
      <div className="line-clamp-1 text-lg font-bold dark:text-white">
        {title}
      </div>
      <div className="mt-3 flex gap-3">
        {tags.map((tag, index) => (
          <Button
            key={index}
            className="body-medium rounded-lg bg-light-800 px-6 py-3 text-xs capitalize text-light-500 shadow-none dark:bg-dark-300"
          >
            {tag.name}
          </Button>
        ))}
      </div>

      <div className="mt-5 flex justify-between text-sm dark:text-white">
        {author} | {dateAsked.toUTCString()}
        <div className="flex items-center gap-1">
          <Image
            src="/assets/icons/like.svg"
            alt="upvote"
            width={16}
            height={16}
          />
          <div className="text-xs">{numberOfVotes} Votes</div>
          <Image
            src="/assets/icons/message.svg"
            alt="upvote"
            width={16}
            height={16}
          />
          <div className="text-xs">{numberOfAnswers} Comments</div>
          <Image
            src="/assets/icons/eye.svg"
            alt="upvote"
            width={16}
            height={16}
          />
          <div className="text-xs">{numberOfViews} Views</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
