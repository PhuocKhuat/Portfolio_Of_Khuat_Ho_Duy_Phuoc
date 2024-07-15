import { FC, lazy, Suspense } from 'react'
import { useTranslations } from 'next-intl'
import Mouse from '@/components/Mouse/Mouse'
import Loading from '@/app/[locale]/loading'

const Introduce = lazy(() => import('@/components/Introduce/Introduce'))

const Home: FC = () => {
  const translate = useTranslations('HomePage')
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Introduce translate={translate} />
      </Suspense>
      <Mouse />
    </>
  )
}

export default Home
