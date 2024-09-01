import React from 'react'
import Image from 'next/image'
import { I_Props_NotFoundRight } from '@/types/home'

const NotFoundRight = ({ avatar_not_found }: I_Props_NotFoundRight): JSX.Element => {
  return (
    <div>
      <Image alt='avatar-not-found' src={avatar_not_found} width={500} height={500} priority />
    </div>
  )
}

export default NotFoundRight
