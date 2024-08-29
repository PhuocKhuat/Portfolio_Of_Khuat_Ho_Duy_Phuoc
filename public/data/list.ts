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
    title: 'work-intern-1',
    url: FULL_STACK_COURSE,
    view: 'view-course',
    academy: 'academy',
    time: 'internship-time'
  }
]
export const certificationList = [
  {
    value: 'item-1',
    title: 'certification-1',
    url: FE_CERTIFICATION,
    view: 'view-certificate',
    academy: 'academy',
    time: 'study-time-FE'
  },
  {
    value: 'item-2',
    title: 'certification-2',
    url: BE_CERTIFICATION,
    view: 'view-certificate',
    academy: 'academy',
    time: 'study-time-node'
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
