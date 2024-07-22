import { BE_CERTIFICATION, FE_CERTIFICATION } from '@/constants/certification'
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

export const certificationList = [
  {
    value: 'item-1',
    title: 'Professional Front-End Developer',
    certificate: FE_CERTIFICATION,
    academy: 'CyberSoft Academy',
    time: '2023 - 2024'
  },
  {
    value: 'item-2',
    title: 'Professional Node JS Developer',
    certificate: BE_CERTIFICATION,
    academy: 'CyberSoft Academy',
    time: '2024'
  }
]
