interface Skill {
  name: string
  img: string
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

interface SkillsData {
  technicalSkills: SkillCategory[]
}

interface I_Props_Skill_Item {
  techSkill: SkillCategory[]
  error: Error | null
}
