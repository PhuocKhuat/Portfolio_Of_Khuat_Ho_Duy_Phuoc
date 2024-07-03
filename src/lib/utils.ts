import { type ClassValue, clsx } from 'clsx'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const cn: FC = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export default cn
