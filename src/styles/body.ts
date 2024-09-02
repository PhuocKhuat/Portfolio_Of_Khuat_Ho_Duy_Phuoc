import { I_Style_Introduce, I_Style_Skill } from '@/types/home'

// mdn: min-width: 1200px
export const introduce: I_Style_Introduce = {
  parentItem: 'mdn:flex justify-center items-center md:grid md:grid-cols-2 relative',
  leftText: 'col-span-1 absolute top-0 mdn:left-32 md:left-0 text-4xl font-bold mdn:w-80 xsm:w-3/5 w-64',
  imgItem: 'col-span-1 col-start-2 md:block hidden',
  rightText: 'col-span-1 absolute mdm:top-[11rem] md:top-56 xsn:top-44 top-56 mdn:-right-6 xsm:w-96 w-80 leading-[1.3]',
  avatarSize: 'w-[42.8rem] h-[30.8rem]',
  hideItem: 'md:block hidden',
  showItem: 'md:hidden block w-[80vw]'
}
export const skills: I_Style_Skill = {
  customCategory: 'mdn:flex gap-8 items-center block',
  makeUpCategory: 'border-b border-gray-300 p-2 mb-2 shadow-md',
  category: 'text-xl mdn:w-[30%] mdn:mb-0 text-slate-300 w-full mb-2',
  hoverSkill: 'transform transition-transform hover:scale-95 hover:shadow-xl',
  customSkill: 'flex justify-center items-center gap-5',
  makeUpSkill: 'p-2 border-2 mb-0 rounded-lg'
}
export const information = {
  title: 'sm:text-xl xsn:text-lg text-sm',
  content: 'flex flex-wrap justify-between text-blue-300'
}
