import React, { FC } from 'react'
import Item from '@/components/Skills/Item'
// import {Item} from '../index'
import { BigTitle } from '@/components/Custom'
import styles from '@/styles/styles'
import { montserrat, playfairDisplay } from '@/fonts/font'
import waitLoading from '@/lib/loading'
import { skillList } from 'public/data/skills'
import { I_Props_Translate } from '@/types/home'

const Skills: FC<I_Props_Translate> = async ({ translate }) => {
  await waitLoading(500)
  return (
    <section id='skills' className={montserrat.className}>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <BigTitle
              text={translate('technical-skill')}
              className={`${playfairDisplay.className} ${styles.bigTitle}`}
            />
            <Item skillList={skillList} translate={translate} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
