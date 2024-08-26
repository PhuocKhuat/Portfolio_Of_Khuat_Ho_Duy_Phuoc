import FooterContact from '@/components/Contact/FooterContact'
import InvitationContact from '@/components/Contact/InvitationContact'
import styles from '@/styles/styles'
import React from 'react'

const Contact = (): JSX.Element => {
  return (
    <section id='contact'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <InvitationContact />
            <FooterContact />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
