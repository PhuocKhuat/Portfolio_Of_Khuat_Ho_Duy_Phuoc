import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Phuoc Khuat - Frontend developer', // Có khai báo title thì lấy giá trị template
    default: 'Phuoc Khuat - Frontend developer' // Ko khai báo title thì lấy giá trị default
  },
  description:
    'Phuoc Khuat - A passionate frontend developer crafting dynamic, user-centric web applications with a focus on clean code and seamless user experiences.'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.JSX.Element
}>): JSX.Element => {
  return children
}

export default RootLayout
