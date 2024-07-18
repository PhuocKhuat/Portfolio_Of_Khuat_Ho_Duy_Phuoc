import React, { FC } from 'react'
import Image from 'next/image'
import { skills } from '@/styles/body'

const Item: FC<I_Props_Skill_Item> = ({ techSkill, error }) => {
  const renderSkills = () => {
    if (error) {
      return <div>Error loading skills: {error.message}</div>
    }
    return techSkill.map((item) => (
      <div key={item.category} className={`${skills.customCategory} ${skills.makeUpCategory}`}>
        <h3 className='text-xl'>{item.category}</h3>
        <div className={skills.customSkill}>
          {item.skills.map((skill) => (
            <div key={skill.name} className={skills.makeUpSkill}>
              <Image alt={skill.name} src={skill.img} width={50} height={50} priority />
            </div>
          ))}
        </div>
      </div>
    ))
  }
  return <>{renderSkills()}</>
}

export default Item
