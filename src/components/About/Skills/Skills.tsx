'use client'

import React, { FC, useEffect, useState } from 'react'
import Item from '@/components/About/Skills/Item'
import { Title } from '@/components/Custom'

const Skills: FC = () => {
  const [techSkill, setTechSkill] = useState<SkillCategory[]>([])
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    fetch('/data/skills.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data: SkillsData) => {
        setTechSkill(data.technicalSkills)
      })
      .catch((error) => {
        setError(error as Error)
      })
  }, [])

  return (
    <div>
      <Title text={'TECHNICAL SKILL'} />
      <Item techSkill={techSkill} error={error} />
    </div>
  )
}

export default Skills
