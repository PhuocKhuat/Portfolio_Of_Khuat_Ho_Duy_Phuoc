import React from 'react'
import ProjectItem from '@/components/Projects/ProjectItem'
import { BigTitle } from '@/components/Custom'
import { playfairDisplay } from '@/fonts/font'
import styles from '@/styles/styles'
import { projectList } from 'public/data/list'

const Projects: React.FC = () => {
  return (
    <section id='project'>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <BigTitle text='Selected projects' className={`${styles.bigTitle} ${playfairDisplay.className}`} />
            <div className='flex gap-7'>
              <ProjectItem list={projectList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
