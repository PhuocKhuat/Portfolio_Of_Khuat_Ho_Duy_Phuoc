// md: min-width: 768px
export const header: I_Style_Header = {
  circleImage: 'rounded-full w-16 h-14',
  showMobileNav: 'md:hidden block',
  hideItem: 'md:flex hidden',
  hideNav: 'md:block hidden'
}
export const navbar: I_Style_Navbar = {
  handleFlex: 'flex md:flex-row flex-col',
  handleGap: 'md:gap-8 gap-0'
}
export const mobileNav: I_Style_MobileNav = {
  customSize: 'w-32 h-auto px-1.5 py-2'
}
export const themes: I_Style_Theme = {
  sizeSun: 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all',
  sizeMoon: 'absolute  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all',
  hideItem: 'md:block hidden'
}
// mdn: min-width: 1200px
export const introduce: I_Style_Introduce = {
  parentItem: 'mdn:flex justify-center items-center md:grid md:grid-cols-2 relative',
  leftText: 'col-span-1 absolute top-10 mdn:left-44 md:left-0 text-4xl font-bold w-64',
  imgItem: 'col-span-1 col-start-2 md:block hidden',
  rightText: 'col-span-1 absolute mdn:top-52 top-64 bottom-10 mdn:right-0 xsm:w-96 w-80',
  thirdChildText: 'text-sm font-medium',
  avatarSize: 'w-[42.8rem] h-[30.8rem]'
}
export const loading = {
  screen: 'w-screen h-screen bg-red-400 fixed top-0 left-0 z-40',
  between: 'flex justify-center items-center z-10'
}
