import { black } from '@/constants/color'
import { DARK, LIGHT } from '@/constants/theme'
import styles from '@/styles/styles'
import { Dot } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { FC } from 'react'

const MobiTheme: FC = () => {
  const { setTheme } = useTheme()
  return (
    <>
      <div className={styles.lineBottom}>
        <div className={`${styles.pointer} ${styles.flex} `} onClick={() => setTheme(LIGHT)}>
          <Dot color={black} />
          Light
        </div>
        <br />
        <div className={`${styles.pointer} ${styles.flex} `} onClick={() => setTheme(DARK)}>
          <Dot color={black} />
          Dark
        </div>
      </div>
    </>
  )
}

export default MobiTheme
