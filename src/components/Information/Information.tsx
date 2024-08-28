import React, { FC } from 'react'
import waitLoading from '@/lib/loading'
import styles from '@/styles/styles'
import { certificationList } from 'public/data/list'
import { educationList } from 'public/data/list'
import InformationItem from '@/components/Information/InformationItem'
import { BigTitle } from '@/components/Custom'
import { playfairDisplay } from '@/fonts/font'

const Information: FC<I_Props_Translate> = async ({ translate }: I_Props_Translate) => {
  await waitLoading(1000)
  return (
    <section id='information' className='lg:h-[32.3rem] h-[36rem]'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <BigTitle text={translate('educations')} className={`${playfairDisplay.className} ${styles.bigTitle}`} />
            <InformationItem list={educationList} />
            <BigTitle
              text={translate('certifications')}
              className={`${playfairDisplay.className} ${styles.bigTitle}`}
            />
            <InformationItem list={certificationList} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
