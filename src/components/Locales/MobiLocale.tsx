'use client'

import styles from '@/styles/styles'
import Image from 'next/image'
import React, { FC, useTransition } from 'react'
import englishFlag from '/public/imgs/englandFlag.png'
import vietnamFlag from '/public/imgs/vietnamFlag.png'
import { useRouter } from 'next/navigation'
import { ENG, VIE } from '@/constants/locale'
import { useLocale } from 'next-intl'

const MobiLocale: FC = () => {
  const [isPending, startTransiton] = useTransition()
  const localeActive = useLocale()
  const router = useRouter()
  const handleLocale = (e: React.MouseEvent<HTMLButtonElement>): void => {
    startTransiton(() => {
      router.replace(`/${e.currentTarget.dataset.value}`)
    })
  }
  return (
    <>
      <div className={`${styles.flexCol} ${styles.gap2} ${styles.spaceTB}`}>
        {/* ENG */}
        <button data-value={ENG} onClick={handleLocale} disabled={isPending || localeActive === ENG}>
          <span className={`${styles.flexCenter} ${styles.gap2}`}>
            <Image alt='england flag' src={englishFlag} className={styles.iconSize} quality={65} priority />
            Eng
          </span>
        </button>
        {/* VIE */}
        <button data-value={VIE} onClick={handleLocale} disabled={isPending || localeActive === VIE}>
          <span className={`${styles.flexCenter} ${styles.gap2}`}>
            <Image alt='vietnam flag' src={vietnamFlag} className={styles.iconSize} quality={65} priority />
            Vie
          </span>
        </button>
        {/*  */}
      </div>
    </>
  )
}

export default MobiLocale
