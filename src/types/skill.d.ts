interface Skill {
  name: type_string
  img: type_string
}
interface SkillCategory {
  category: type_string
  skills: Skill[]
}
interface SkillsData {
  technicalSkills: SkillCategory[]
}

interface I_Props_Skill_Item {
  techSkill: SkillCategory[]
  error: Error | null
}
interface I_Props_Skill_Tooltip {
  skill: Skill
}
interface I_Props_Skill_Carousel {
  item: SkillCategory
}

interface I_Style_Skill {
  customCategory: type_string
  makeUpCategory: type_string
  category: type_string
  hoverSkill: type_string
  customSkill: type_string
  makeUpSkill: type_string
}
