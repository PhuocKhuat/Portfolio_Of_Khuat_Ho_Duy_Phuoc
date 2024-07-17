import styles from '@/styles/styles'
import Image from 'next/image'
import React, { FC, useTransition } from 'react'
import englishFlag from '/public/imgs/header/englandFlag.png'
import vietnamFlag from '/public/imgs/header/vietnamFlag.png'
import { useRouter } from 'next/navigation'
import { ENG, VIE } from '@/constants/locale'
import { useLocale } from 'next-intl'

const MobiLocale: FC<I_Props_Translate> = ({ translate }) => {
  const [isPending, startTransiton] = useTransition()
  const localeActive = useLocale()
  const router = useRouter()
  const handleLocale = (e: React.MouseEvent<HTMLButtonElement>): void => {
    startTransiton(() => {
      router.replace(`/${e.currentTarget.dataset.value}`)
    })
  }
  return (
    <div className={`${styles.flexCol} ${styles.gap2} p-[2.5]`}>
      {/* ENG */}
      <button data-value={ENG} onClick={handleLocale} disabled={isPending || localeActive === ENG}>
        <span className={`${styles.flexCenter} ${styles.gap2}`}>
          <Image alt='england flag' src={englishFlag} className={styles.iconSize} quality={65} priority />
          {translate(ENG)}
        </span>
      </button>
      {/* VIE */}
      <button data-value={VIE} onClick={handleLocale} disabled={isPending || localeActive === VIE}>
        <span className={`${styles.flexCenter} ${styles.gap2}`}>
          <Image alt='vietnam flag' src={vietnamFlag} className={styles.iconSize} quality={65} priority />
          {translate(VIE)}
        </span>
      </button>
      {/*  */}
    </div>
  )
}

export default MobiLocale
