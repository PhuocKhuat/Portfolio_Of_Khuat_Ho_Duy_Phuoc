import { FC } from 'react'
import Image from 'next/image'
import avatar_2 from 'public/imgs/introduce/avatar_portfolio_2.png'
import { FirstAppears, Scroll, SecondAppears, ThirdAppears, Title } from '@/components/Custom'
import styles from '@/styles/styles'
import { introduce } from '@/styles/home'

const Introduce: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <Scroll>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={introduce.parentItem}>
            <div className={introduce.leftText}>
              <FirstAppears text={translate('name')} />
              <SecondAppears text={translate('job')} />
              <ThirdAppears text={translate('passion')} />
            </div>
            <div className={introduce.imgItem}>
              <Image alt='Phuoc' src={avatar_2} quality={80} priority className={introduce.avatarSize} />
            </div>
            <div className={introduce.rightText}>
              <div className='leading-[1.3]'>
                <Title text={translate('title-about')} />
                <FirstAppears text={translate('full-name')} />
                <SecondAppears text={translate('education')} />
                <ThirdAppears text={translate('habitat')} />
              </div>
              <br />
              <div className='leading-[1.3]'>
                <Title text={translate('title-work')} />
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
