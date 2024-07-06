import { Montserrat, Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['vietnamese'], weight: '400', style: 'italic', display: 'swap' })

const montserrat = Montserrat({ subsets: ['vietnamese'], weight: '400', style: 'italic', display: 'swap' })

export { playfairDisplay, montserrat }
