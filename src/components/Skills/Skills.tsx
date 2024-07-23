import React, { FC } from 'react'
import Item from '@/components/Skills/Item'
import { Title } from '@/components/Custom'
import styles from '@/styles/styles'
import { montserrat } from '@/fonts/font'
import waitLoading from '@/lib/loading'
import { skillList } from 'public/data/skills'

const Skills: FC<I_Props_Translate> = async ({ translate }) => {
  await waitLoading(1000)
  return (
    <section id='skills' className={montserrat.className}>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <Title text={translate('technical-skill')} />
            <Item skillList={skillList} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
