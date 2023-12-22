import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000)

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds)
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`
    }
  }

  return 'just now'
}

export function formatNumber(num: number): string {
  const abbreviations = ['', 'k', 'M', 'B', 'T'] // Add more abbreviations as needed

  // Determine the appropriate abbreviation index
  const index = Math.floor(Math.log10(Math.abs(num)) / 3)

  // Format the number with the appropriate abbreviation
  const formattedNum = num / Math.pow(10, index * 3)
  const roundedNum = Math.round(formattedNum * 10) / 10 // Round to one decimal place

  // Use the abbreviation and construct the formatted string
  const result = roundedNum + abbreviations[index]

  return result
}
