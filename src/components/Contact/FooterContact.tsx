import styles from '@/styles/styles'
import Link from 'next/link'
import { iconList } from 'public/data/list'
import React from 'react'

const FooterContact: React.FC<I_Props_Translate> = ({ translate }) => {
  const renderIcon = iconList.map((Icon) => (
    <Link href={Icon.link} key={Icon.index} target='_blank'>
      <Icon.name className='border-2 rounded-full p-[2px] md:w-8 md:h-8 sm:w-6 sm:h-6 ' />
    </Link>
  ))
  return (
    <div className={`${styles.flexBetween} mt-14`}>
      <span className='xsn:text-base text-sm'>{translate('copyright')}</span>
      <div className='flex gap-2'>{renderIcon}</div>
    </div>
  )
}

export default FooterContact
