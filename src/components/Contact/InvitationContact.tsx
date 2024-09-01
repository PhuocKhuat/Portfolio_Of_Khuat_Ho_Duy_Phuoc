import { BigTitle } from '@/components/Custom'
import { montserratExBold, playfairDisplayNormal } from '@/fonts/font'
import styles from '@/styles/styles'
import { I_Props_Translate } from '@/types/home'
import React from 'react'

const InvitationContact: React.FC<I_Props_Translate> = ({ translate }) => {
  return (
    <div className='text-center'>
      <h2 className={`uppercase ${playfairDisplayNormal.className} mb-3`}>{translate('question-1')}</h2>
      <BigTitle text='khuathoduyphuoc2001@gmail.com' className={`${montserratExBold.className} ${styles.textGmail}`} />
    </div>
  )
}

export default InvitationContact
