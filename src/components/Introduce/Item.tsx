import React, { FC } from 'react'
import Image from 'next/image'
import avatar_2 from 'public/imgs/introduce/avatar_portfolio_2.png'
import { introduce } from '@/styles/body'
import Left from '@/components/Introduce/Left'
import Right from '@/components/Introduce/Right'
import { I_Props_Translate } from '@/types/home'

const Item: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <div className={introduce.parentItem}>
      <Left translate={translate} />
      <div className={introduce.imgItem}>
        <Image alt='Phuoc' src={avatar_2} quality={80} priority className={introduce.avatarSize} />
      </div>
      <Right translate={translate} />
    </div>
  )
}

export default Item
