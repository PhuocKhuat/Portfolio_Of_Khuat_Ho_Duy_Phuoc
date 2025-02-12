import { DropdownMenuRadioItem } from '@/components/ui/dropdown-menu'
import { ENG, VIE } from '@/constants/constants'
import styles from '@/styles/styles'
import { I_Props_Item_Locale } from '@/types/home'
import React, { FC } from 'react'

const Item: FC<I_Props_Item_Locale> = ({ translate, isPending, localeActive }) => {
  return (
    <>
      {[ENG, VIE].map((locale) => (
        <DropdownMenuRadioItem
          key={locale}
          value={locale}
          disabled={isPending || localeActive === locale}
          className={styles.pointer}
        >
          {translate(locale)}
        </DropdownMenuRadioItem>
      ))}
    </>
  )
}

export default Item
