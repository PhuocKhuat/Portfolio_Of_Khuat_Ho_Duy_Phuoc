type type_string = string

// Write interface for root layout.
interface I_Props_RootLayout {
  children: React.ReactNode
  params: {
    locale: type_string
  }
}

// Write private interface for CSS style
interface I_Style_Header {
  circleImage: type_string
  showMobileNav: type_string
  hideItem: type_string
  hideNav: type_string
}
interface I_Style_Navbar {
  handleFlex: type_string
  handleGap: type_string
}
interface I_Style_Theme {
  sizeSun: type_string
  sizeMoon: type_string
  hideItem: type_string
}
interface I_Style_Introduce {
  parentItem: type_string
  leftText: type_string
  rightText: type_string
  imgItem: type_string
  avatarSize: type_string
  hideItem: type_string
  showItem: type_string
}
// Write skill props.
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
  skillList: SkillCategory[]
  translate: (key: string) => string
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
interface SkillsProps extends I_Props_Translate {
  translateKey: string
}
interface I_Style_Loading {
  screen: type_string
  between: type_string
}

// Write interface for object props.
// Translate props.
interface I_Props_Translate {
  translate: (key: type_string) => type_string
}
// Locale props.
interface I_Props_Item_Locale {
  translate: (key: type_string) => type_string
  isPending: boolean
  localeActive: string
}
// Information component props.
interface I_Props_Information_Item {
  value: type_string
  title: type_string
  url: type_string
  view: type_string
  academy: type_string
  time: type_string
}
interface I_Props_Information_List {
  list: I_Props_Information_Item[]
  title: type_string
}
interface I_Props_AccordionItem {
  item: I_Props_Information_Item
}
// Framer motion props.
interface ScrollProps {
  children: ReactNode
  id?: string
  cursor?: string
}
interface OpenProps {
  children: ReactNode
  cursor: string
}
interface I_Props_Text {
  text: string
}
