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

interface I_Style_Skill {
  customCategory: type_string
  makeUpCategory: type_string
  customSkill: type_string
  makeUpSkill: type_string
}
