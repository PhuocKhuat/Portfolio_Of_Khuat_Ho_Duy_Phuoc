'use client'

import React, { FC, useEffect, useState } from 'react'
import Item from '@/components/Skills/Item'
import { Title } from '@/components/Custom'
import styles from '@/styles/styles'
import { montserrat } from '@/fonts/font'
import waitLoading from '@/lib/loading'

const Skills: FC = () => {
  const [techSkill, setTechSkill] = useState<SkillCategory[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await waitLoading(1000)
        const response = await fetch('/data/skills.json')
        if (!response.ok) throw new Error('Network response was not ok')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: SkillsData = await response.json()
        setTechSkill(data.technicalSkills)
      } catch (error) {
        setError(error as Error)
      }
    }
    fetchData().catch((error) => setError(error as Error))
  }, [])

  return (
    <section id='skills' className={montserrat.className}>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}>
            <Title text='Technical Skill' />
            <Item techSkill={techSkill} error={error} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
