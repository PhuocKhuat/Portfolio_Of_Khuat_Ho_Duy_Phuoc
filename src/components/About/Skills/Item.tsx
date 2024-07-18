import React, { FC } from 'react'
import { skills } from '@/styles/body'
import Tooltip from '@/components/About/Skills/Tooltip'

const Item: FC<I_Props_Skill_Item> = ({ techSkill, error }) => {
  const renderSkills = () => {
    if (error) {
      return <div>Error loading skills: {error.message}</div>
    }
    return techSkill.map((item) => (
      <div key={item.category} className={`${skills.customCategory} ${skills.makeUpCategory}`}>
        <h3 className={skills.category}>{item.category}</h3>
        <div className={skills.customSkill}>
          {item.skills.map((skill) => (
            <div key={skill.name} className={skills.makeUpSkill}>
              <Tooltip skill={skill} />
            </div>
          ))}
        </div>
      </div>
    ))
  }
  return <>{renderSkills()}</>
}

export default Item
