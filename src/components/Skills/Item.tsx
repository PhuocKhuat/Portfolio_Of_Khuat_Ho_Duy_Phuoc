import React, { FC } from 'react'
import { skills } from '@/styles/body'
import Carousel from '@/components/Skills/Carousel'

const Item: FC<I_Props_Skill_Item> = ({ skillList }) => {
  const renderSkills = () =>
    skillList.map((item) => (
      <div key={item.category} className={`${skills.customCategory} ${skills.makeUpCategory}`}>
        <h3 className={skills.category}>{item.category}</h3>
        <Carousel item={item} />
      </div>
    ))
  return <>{renderSkills()}</>
}

export default Item
