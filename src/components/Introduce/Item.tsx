import React, { FC } from 'react'
import { FirstAppears, SecondAppears, ThirdAppears, Title } from '@/components/Custom'
import Image from 'next/image'
import avatar_2 from 'public/imgs/introduce/avatar_portfolio_2.png'
import { introduce } from '@/styles/body'

const Item: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <div className={introduce.parentItem}>
      <div className={introduce.leftText}>
        <div className='md:block hidden'>
          <Title text={translate('name')} />
        </div>
        <div className='md:block hidden'>
          <Title text={translate('job')} />
        </div>
        <div className='md:hidden block w-[80vw]'>
          <Title text={translate('name&job')} />
        </div>
        <ThirdAppears text={translate('passion')} />
      </div>
      <div className={introduce.imgItem}>
        <Image alt='Phuoc' src={avatar_2} quality={80} priority className={introduce.avatarSize} />
      </div>
      <div className={introduce.rightText}>
        <div className='leading-[1.3]'>
          <Title text={translate('title-about')} />
          <div className='md:block hidden'>
            <FirstAppears text={translate('full-name')} />
          </div>
          <div className='md:block hidden'>
            <SecondAppears text={translate('education')} />
          </div>
          <div className='md:block hidden'>
            <ThirdAppears text={translate('habitat')} />
          </div>
          <div className='md:hidden block w-[80vw]'>
            <FirstAppears text={translate('full-about')} />
          </div>
        </div>
        <br />
        <div className='leading-[1.3]'>
          <Title text={translate('title-work')} />
          <div className='md:block hidden'>
            <FirstAppears text={translate('work')} />
          </div>
          <div className='md:block hidden'>
            <SecondAppears text={translate('role')} />
          </div>
          <div className='md:hidden block w-[80vw]'>
            <FirstAppears text={translate('full-work')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
