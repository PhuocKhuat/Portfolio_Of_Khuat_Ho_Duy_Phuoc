import { black } from '@/constants/color'
import { DARK, LIGHT } from '@/constants/theme'
import styles from '@/styles/styles'
import { Dot } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { FC } from 'react'

const MobiTheme: FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className={`${styles.flexCol} ${styles.gap2} ${styles.lineBottom}`}>
        <button className={`${styles.flexCenter}`} onClick={() => setTheme(LIGHT)} disabled={theme === LIGHT}>
          <Dot color={black} />
          Light
        </button>
        <button className={`${styles.flexCenter}`} onClick={() => setTheme(DARK)} disabled={theme === DARK}>
          <Dot color={black} />
          Dark
        </button>
      </div>
    </>
  )
}

export default MobiTheme
