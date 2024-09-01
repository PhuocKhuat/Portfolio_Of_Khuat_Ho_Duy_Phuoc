import { I_Style_Header, I_Style_Navbar, I_Style_Theme } from '@/types/home'

// md: min-width: 768px
export const header: I_Style_Header = {
  circleImage: 'rounded-full w-16 h-14',
  showMobileNav: 'lg:hidden block',
  hideItem: 'lg:flex hidden',
  hideNav: 'lg:block hidden'
}
export const navbar: I_Style_Navbar = {
  handleFlex: 'flex lg:flex-row flex-col',
  handleGap: 'lg:gap-8 md:gap-5 gap-0'
}
export const themes: I_Style_Theme = {
  sizeSun: 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all',
  sizeMoon: 'absolute  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all',
  hideItem: 'md:block hidden'
}
export const loading = {
  screen: 'w-screen h-screen bg-red-400 fixed top-0 left-0 z-40',
  between: 'flex justify-center items-center z-10'
}
