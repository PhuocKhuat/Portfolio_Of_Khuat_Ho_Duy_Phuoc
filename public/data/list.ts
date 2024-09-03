import { Facebook, Github, Linkedin } from 'lucide-react'
import englishFlag from '/public/imgs/header/englandFlag.png'
import vietnamFlag from '/public/imgs/header/vietnamFlag.png'
import e_learning_img from '/public/imgs/projects/e-learning-7c.png'
import movie_theater_img from '/public/imgs/projects/movie-theater-1a.png'
import {
  I_Item_EducateACertificateList,
  I_Item_IconList,
  I_Item_LocaleList,
  I_Item_ProjectList,
  I_Item_WorkList
} from '@/types/home'
import { BE_CERTIFICATION, ENG, FE_CERTIFICATION, FULL_STACK_COURSE, VIE } from '@/constants/constants'

export const localeList: I_Item_LocaleList[] = [
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

export const educationList: I_Item_EducateACertificateList[] = [
  {
    value: 'item-1',
    title: 'work-intern-1',
    url: FULL_STACK_COURSE,
    view: 'view-course',
    academy: 'academy',
    time: 'study-course-time-1'
  }
]
export const certificationList: I_Item_EducateACertificateList[] = [
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

export const projectList: I_Item_ProjectList[] = [
  {
    index: 1,
    number: '01',
    url: 'https://e-learning-system-website.vercel.app/',
    img: e_learning_img,
    time: 'project-time-1',
    name: 'project-name-1'
  },
  {
    index: 2,
    number: '02',
    url: 'https://movie-theater-flax.vercel.app/',
    img: movie_theater_img,
    time: 'project-time-2',
    name: 'project-name-2'
  }
]

export const iconList: I_Item_IconList[] = [
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
