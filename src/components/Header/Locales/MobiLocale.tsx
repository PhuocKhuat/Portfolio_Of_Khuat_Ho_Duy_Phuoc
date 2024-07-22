import styles from '@/styles/styles'
import Image from 'next/image'
import React, { FC, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { localeList } from 'public/data/list'

const MobiLocale: FC<I_Props_Translate> = ({ translate }) => {
  const [isPending, startTransiton] = useTransition()
  const localeActive = useLocale()
  const router = useRouter()
  const handleLocale = (e: React.MouseEvent<HTMLButtonElement>): void => {
    startTransiton(() => {
      router.replace(`/${e.currentTarget.dataset.value}`)
    })
  }
  const renderLocaleList = () =>
    localeList.map((item) => (
      <button
        key={item.lang}
        data-value={item.lang}
        onClick={handleLocale}
        disabled={isPending || localeActive === item.lang}
        className='block mt-3'
      >
        <span className={`${styles.flexCenter} ${styles.gap2}`}>
          <Image alt={item.alt} src={item.img} className={styles.iconSize} quality={65} priority />
          {translate(item.lang)}
        </span>
      </button>
    ))
  return <div className={styles.lineBottom}>{renderLocaleList()}</div>
}

export default MobiLocale
