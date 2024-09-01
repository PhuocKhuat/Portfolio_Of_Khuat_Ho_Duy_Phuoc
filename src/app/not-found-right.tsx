import React from 'react'
import Image from 'next/image'
import { I_Props_NotFoundRight } from '@/types/home'

const NotFoundRight = ({ avatar_not_found }: I_Props_NotFoundRight): JSX.Element => {
  return (
    <div className='md:block hidden'>
      <Image alt='avatar-not-found' src={avatar_not_found} width={347} height={347} quality={100} />
    </div>
  )
}

export default NotFoundRight
