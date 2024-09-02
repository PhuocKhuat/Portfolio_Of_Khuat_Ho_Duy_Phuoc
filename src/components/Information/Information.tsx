import React, { FC } from 'react'
import waitLoading from '@/lib/loading'
import styles from '@/styles/styles'
import { certificationList } from 'public/data/list'
import { educationList } from 'public/data/list'
import InformationItem from '@/components/Information/InformationItem'
import { BigTitle } from '@/components/Custom'
import { playfairDisplay } from '@/fonts/font'
import { I_Props_Translate } from '@/types/home'

const Information: FC<I_Props_Translate> = async ({ translate }) => {
  await waitLoading(500)
  return (
    <section id='information' className='lg:h-[32.3rem] h-[36rem]'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <BigTitle text={translate('educations')} className={`${playfairDisplay.className} ${styles.bigTitle}`} />
            <InformationItem list={educationList} translate={translate} />
            <BigTitle
              text={translate('certifications')}
              className={`${playfairDisplay.className} ${styles.bigTitle}`}
            />
            <InformationItem list={certificationList} translate={translate} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
