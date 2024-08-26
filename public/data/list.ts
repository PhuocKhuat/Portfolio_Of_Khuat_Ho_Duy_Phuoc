import { Facebook, Github, Linkedin } from 'lucide-react'
import { BE_CERTIFICATION, FE_CERTIFICATION, FULL_STACK_COURSE } from '@/constants/certification'
import { ENG, VIE } from '@/constants/locale'
import englishFlag from '/public/imgs/header/englandFlag.png'
import vietnamFlag from '/public/imgs/header/vietnamFlag.png'

export const localeList = [
  {
    lang: ENG,
    alt: 'england flag',
    img: englishFlag
  },
  {
    lang: VIE,
    alt: 'vietnam flag',
    img: vietnamFlag
  }
]

export const educationList = [
  {
    value: 'item-1',
    title: 'Bootcamp - Full-Stack JavaScript from Zero to Job',
    url: FULL_STACK_COURSE,
    view: 'View course',
    academy: 'CyberSoft Academy',
    time: 'July 2023 -  April 2024'
  }
]
export const certificationList = [
  {
    value: 'item-1',
    title: 'Professional Front-End Developer',
    url: FE_CERTIFICATION,
    view: 'View certificate',
    academy: 'CyberSoft Academy',
    time: '2023 - 2024'
  },
  {
    value: 'item-2',
    title: 'Professional Node JS Developer',
    url: BE_CERTIFICATION,
    view: 'View certificate',
    academy: 'CyberSoft Academy',
    time: '2024'
  }
]

export const workList: I_Item_WorkList[] = [
  {
    index: 1,
    position: 'Front-End Developer',
    url: 'www',
    view: 'View product',
    company: 'Viet Tri Dao company',
    time: 'July 2024 - August 2024',
    typeOfWork: 'Remote'
  }
]

export const iconList = [
  {
    index: 1,
    name: Github,
    link: 'https://github.com/PhuocKhuat'
  },
  {
    index: 2,
    name: Facebook,
    link: 'https://www.facebook.com/phuoc.khuat.50'
  },
  {
    index: 3,
    name: Linkedin,
    link: 'https://www.linkedin.com/in/phuoc-khuat/'
  }
]
