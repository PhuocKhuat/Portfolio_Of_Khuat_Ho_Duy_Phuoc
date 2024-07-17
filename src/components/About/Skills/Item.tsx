import React, { FC } from 'react'
import Image from 'next/image'
import styles from '@/styles/styles'

const Item: FC<I_Props_Skill_Item> = ({ techSkill, error }) => {
  const renderSkills = () => {
    if (error) {
      return <div>Error loading skills: {error.message}</div>
    }
    return techSkill.map((item) => (
      <div key={item.category}>
        <h3>{item.category}</h3>
        <div className={`${styles.flex} ${styles.gap8}`}>
          {item.skills.map((skill) => (
            <div key={skill.name}>
              <Image alt={skill.name} src={skill.img} width={60} height={60} priority />
            </div>
          ))}
        </div>
      </div>
    ))
  }
  return <>{renderSkills()}</>
}

export default Item
