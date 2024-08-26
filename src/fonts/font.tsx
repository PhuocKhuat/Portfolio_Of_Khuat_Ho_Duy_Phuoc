import { Montserrat, Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['vietnamese'], weight: '400', style: 'italic', display: 'swap' })

const playfairDisplayNormal = Playfair_Display({
  subsets: ['vietnamese'],
  weight: '400',
  style: 'normal',
  display: 'swap'
})

const montserrat = Montserrat({ subsets: ['vietnamese'], weight: '400', style: 'italic', display: 'swap' })

const montserratNormal = Montserrat({ subsets: ['vietnamese'], weight: '400', style: 'normal', display: 'swap' })

const montserratExBold = Montserrat({ subsets: ['vietnamese'], weight: '900', style: 'italic', display: 'swap' })

export { playfairDisplay, playfairDisplayNormal, montserrat, montserratNormal, montserratExBold }
