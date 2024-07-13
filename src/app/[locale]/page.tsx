import Introduce from '@/components/Introduce/Introduce'
import Mouse from '@/components/Mouse/Mouse'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

const Home: FC = () => {
  const translate = useTranslations('HomePage')
  return (
    <>
      <Introduce translate={translate} />
      <Mouse />
    </>
  )
}

export default Home
