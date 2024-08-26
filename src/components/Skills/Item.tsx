import React, { FC } from 'react'
import { skills } from '@/styles/body'
import Carousel from '@/components/Skills/Carousel'
import { FirstAppears } from '@/components/Custom'
import { montserratNormal } from '@/fonts/font'

const Item: FC<I_Props_Skill_Item> = ({ skillList, translate }) => {
  const renderSkills = () =>
    skillList.map((item) => (
      <div
        key={item.category}
        className={`${skills.customCategory} ${skills.makeUpCategory} ${montserratNormal.className}`}
      >
        <h3 className={skills.category}>
          <FirstAppears text={translate(item.category)} />
        </h3>
        <Carousel item={item} />
      </div>
    ))
  return <>{renderSkills()}</>
}

export default Item
