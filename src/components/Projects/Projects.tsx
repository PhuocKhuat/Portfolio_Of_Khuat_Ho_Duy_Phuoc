import React from 'react'
import ProjectItem from '@/components/Projects/ProjectItem'
import { BigTitle } from '@/components/Custom'
import { playfairDisplay } from '@/fonts/font'
import styles from '@/styles/styles'
import { projectList } from 'public/data/list'
import { I_Props_Translate } from '@/types/home'
import waitLoading from '@/lib/loading'

const Projects: React.FC<I_Props_Translate> = async ({ translate }) => {
  await waitLoading(500)
  return (
    <section id='project'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <BigTitle text={translate('projects')} className={`${styles.bigTitle} ${playfairDisplay.className}`} />
            <div className='block md:flex space-x-0 md:space-x-5 md:space-y-0 space-y-20 mt-12'>
              <ProjectItem list={projectList} translate={translate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
