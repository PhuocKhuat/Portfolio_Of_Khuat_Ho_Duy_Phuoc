// Write interface for root layout.
interface I_Props_RootLayout {
  children: React.ReactNode
  params: {
    locale: string
  }
}

// Write private interface for CSS style
interface I_Style_Header {
  circleImage: string
  showMobileNav: string
  hideItem: string
  hideNav: string
}
interface I_Style_Navbar {
  handleFlex: string
  handleGap: string
}
interface I_Style_Theme {
  sizeSun: string
  sizeMoon: string
  hideItem: string
}
interface I_Style_Introduce {
  parentItem: string
  leftText: string
  rightText: string
  imgItem: string
  avatarSize: string
  hideItem: string
  showItem: string
}
interface I_Style_Skill {
  customCategory: string
  makeUpCategory: string
  category: string
  hoverSkill: string
  customSkill: string
  makeUpSkill: string
}
interface I_Style_Loading {
  screen: string
  between: string
}

// Write interface props.
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
  skillList: SkillCategory[]
  translate: (key: string) => string
}
interface I_Props_Skill_Tooltip {
  skill: Skill
}
interface I_Props_Skill_Carousel {
  item: SkillCategory
}
interface SkillsProps extends I_Props_Translate {
  translateKey: string
}
interface I_Props_WorkList {
  workList: I_Item_WorkList[]
  translate: (key: string) => string
}
interface I_Props_ProjectItem {
  list: I_Item_ProjectList[]
  translate: (key: string) => string
}

// Write interface for object props.
// Translate props.
interface I_Props_Translate {
  translate: (key: string) => string
  drawerClose?: () => void
}
// Locale props.
interface I_Props_Item_Locale {
  translate: (key: string) => string
  isPending: boolean
  localeActive: string
}

// Information list props.
interface I_Props_Information_Item {
  value: string
  title: string
  url: string
  view: string
  academy: string
  time: string
}
interface I_Props_Information_List {
  list: I_Props_Information_Item[]
  translate: (key: string) => string
}
interface I_Props_AccordionItem {
  item: I_Props_Information_Item
  translate: (key: string) => string
}
interface I_Item_WorkList {
  index: number
  position: string
  url: string
  view: string
  company: string
  time: string
  typeOfWork: string
}
interface I_Item_ProjectList {
  index: number
  number: string
  url: string
  img: StaticImageData
  time: string
  name: string
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
  link?: string
  drawerClose?: () => void
  className?: string
}
