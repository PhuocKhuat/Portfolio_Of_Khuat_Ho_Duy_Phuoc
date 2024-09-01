import { DARK, LIGHT } from '@/constants/theme'
import styles from '@/styles/styles'
import { I_Props_Translate } from '@/types/home'
import { useTheme } from 'next-themes'
import React, { FC } from 'react'

const MobiTheme: FC<I_Props_Translate> = ({ translate }) => {
  const { theme, setTheme } = useTheme()
  return (
    <div className={styles.lineBottom}>
      <button onClick={() => setTheme(LIGHT)} disabled={theme === LIGHT} className='block'>
        {translate(LIGHT)}
      </button>
      <button onClick={() => setTheme(DARK)} disabled={theme === DARK} className='mt-5'>
        {translate(DARK)}
      </button>
    </div>
  )
}

export default MobiTheme
