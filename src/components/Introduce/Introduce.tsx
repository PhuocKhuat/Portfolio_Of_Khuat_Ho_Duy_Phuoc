import { FC } from 'react'
import Image from 'next/image'
import avatar_2 from 'public/imgs/introduce/avatar_portfolio_2.png'
import { montserrat } from '@/fonts/font'
import { FirstAppears, Scroll, SecondAppears, ThirdAppears, Title } from '@/components/Custom'
import styles from '@/styles/styles'
import { introduce } from '@/styles/home'

const Introduce: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <Scroll>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={`${styles.flexCenter} relative`}>
            <div className={`absolute top-10 left-44 ${introduce.leftText}`}>
              <FirstAppears text={translate('name')} />
              <SecondAppears text={translate('job')} />
              <ThirdAppears text={translate('passion')} />
            </div>
            <div>
              <Image alt='Phuoc' src={avatar_2} quality={80} priority className={introduce.avatarSize} />
            </div>
            <div className={`absolute top-50 right-0 w-96 ${montserrat.className}`}>
              <Title text={translate('title-about')} />
              <div className='leading-[1.3]'>
                <FirstAppears text={translate('full-name')} />
                <SecondAppears text={translate('education')} />
                <ThirdAppears text={translate('habitat')} />
              </div>
              <br />
              <Title text={translate('title-work')} />
              <div className='leading-[1.3]'>
                <FirstAppears text={translate('work')} />
                <SecondAppears text={translate('role')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  )
}

export default Introduce
