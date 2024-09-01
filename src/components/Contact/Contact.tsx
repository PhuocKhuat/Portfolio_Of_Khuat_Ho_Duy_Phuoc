import FooterContact from '@/components/Contact/FooterContact'
import InvitationContact from '@/components/Contact/InvitationContact'
import styles from '@/styles/styles'
import { I_Props_Translate } from '@/types/home'
import React from 'react'

const Contact: React.FC<I_Props_Translate> = ({ translate }) => {
  return (
    <section id='contact'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <InvitationContact translate={translate} />
            <FooterContact translate={translate} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
