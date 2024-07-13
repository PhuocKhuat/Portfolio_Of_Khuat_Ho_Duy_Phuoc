type type_string = string

interface I_Props_RootLayout {
  children: React.ReactNode
  params: {
    locale: type_string
  }
}
interface I_Props_Translate {
  translate: (key: type_string) => type_string
}

interface I_Style_Header {
  menuWrapper: type_string
  circleImage: type_string
  showMobileNav: type_string
  hideItem: type_string
  hideNav: type_string
}
interface I_Style_Navbar {
  handleFlex: type_string
  handleGap: type_string
}
interface I_Style_MobileNav {
  customSize: type_string
}
interface I_Style_Theme {
  sizeSun: type_string
  sizeMoon: type_string
  hideItem: type_string
}
interface I_Style_Introduce {
  leftText: type_string
  thirdChildText: type_string
  avatarSize: type_string
}
