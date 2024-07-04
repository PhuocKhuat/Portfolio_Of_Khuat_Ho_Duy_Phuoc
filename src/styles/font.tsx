import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

const avant_Grade = localFont({ src: '../fonts/AVANTN.ttf', display: 'swap' })

const poppins = Poppins({ subsets: ['latin-ext'], weight: '400', style: 'italic', display: 'swap' })

export { avant_Grade, poppins }
