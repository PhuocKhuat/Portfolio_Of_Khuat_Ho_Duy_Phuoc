import { BigTitle } from '@/components/Custom'
import { montserratExBold, playfairDisplayNormal } from '@/fonts/font'
import styles from '@/styles/styles'
import React from 'react'

export default function InvitationContact(): JSX.Element {
  return (
    <div className='text-center'>
      <h2 className={`uppercase ${playfairDisplayNormal.className} mb-3`}>Have a project in mind ?</h2>
      <BigTitle text='khuathoduyphuoc2001@gmail.com' className={`${montserratExBold.className} ${styles.textGmail}`} />
    </div>
  )
}
