import { FC } from 'react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Mouse from '@/components/Mouse/Mouse'
import Loading from '@/app/[locale]/loading'

const Introduce = dynamic(() => import('@/components/Introduce/Introduce'), { loading: () => <Loading /> })

const Home: FC = () => {
  const translate = useTranslations('HomePage')
  return (
    <>
      <Introduce translate={translate} />
      <Loading />
      <Mouse />
    </>
  )
}

export default Home
