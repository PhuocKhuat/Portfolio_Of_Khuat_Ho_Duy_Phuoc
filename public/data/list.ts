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
    time: 'study-course-time-1'
  }
]
export const certificationList = [
  {
    value: 'item-1',
    title: 'certification-1',
    url: FE_CERTIFICATION,
    view: 'view-certificate',
    academy: 'academy',
    time: 'FE-certificate-time'
  },
  {
    value: 'item-2',
    title: 'certification-2',
    url: BE_CERTIFICATION,
    view: 'view-certificate',
    academy: 'academy',
    time: 'node-certificate-time'
  }
]

export const workList: I_Item_WorkList[] = [
  {
    index: 1,
    position: 'work-role-1',
    url: 'www',
    view: 'View product',
    company: 'company-1',
    time: 'work-time-1',
    typeOfWork: 'job-type-1'
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
