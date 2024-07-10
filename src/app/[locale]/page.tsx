import Introduce from '@/components/Introduce/Introduce'
import Mouse from '@/components/Mouse/Mouse'
import { FC } from 'react'

const Home: FC = () => {
  // const translate = useTranslations('HomePage')
  return (
    <>
      <Introduce />
      <Mouse />
    </>
  )
}

export default Home
