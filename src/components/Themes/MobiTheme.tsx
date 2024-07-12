import { DARK, LIGHT } from '@/constants/theme'
import styles from '@/styles/styles'
import { useTheme } from 'next-themes'
import React, { FC } from 'react'

const MobiTheme: FC<I_Props_Translate> = ({ translate }) => {
  const { theme, setTheme } = useTheme()
  return (
    <div className={`${styles.flexCol} ${styles.gap2} ${styles.lineBottom}`}>
      <button className={`${styles.flexCenter}`} onClick={() => setTheme(LIGHT)} disabled={theme === LIGHT}>
        {translate(LIGHT)}
      </button>
      <button className={`${styles.flexCenter}`} onClick={() => setTheme(DARK)} disabled={theme === DARK}>
        {translate(DARK)}
      </button>
    </div>
  )
}

export default MobiTheme
