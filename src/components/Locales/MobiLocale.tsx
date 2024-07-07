import styles from '@/styles/styles'
import Image from 'next/image'
import React, { FC } from 'react'
import englishFlag from '/public/imgs/englandFlag.png'
import vietnamFlag from '/public/imgs/vietnamFlag.png'

const MobiLocale: FC = () => {
  //   const [isPending, startTransiton] = useTransition()
  //   const router = useRouter()
  //   const localeActive = useLocale()
  //   const handleChangeValue = (value: string) => {
  //     startTransiton(() => {
  //       router.replace(`/${value}`)
  //     })
  //   }
  return (
    <>
      <div>
        {/* ENG */}
        <div className={`${styles.pointer} ${styles.flexCenter} ${styles.gap2}`}>
          <Image alt='england flag' src={englishFlag} className={styles.iconSize} quality={70} priority />
          <span>Eng</span>
        </div>
        <br />
        {/* VIE */}
        <div className={`${styles.pointer} ${styles.flexCenter} ${styles.gap2}`}>
          <Image alt='vietnam flag' src={vietnamFlag} className={styles.iconSize} quality={70} priority />
          Vie
        </div>
        {/*  */}
      </div>
    </>
  )
}

export default MobiLocale
