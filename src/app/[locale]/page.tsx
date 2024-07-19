import { useTranslations } from 'next-intl'
import { lazy, Suspense } from 'react'
import Mouse from '@/components/Mouse/Mouse'
import Loading from '@/app/[locale]/loading'
import Information from '@/components/Information/Information'

const Introduce = lazy(() => import('@/components/Introduce/Introduce'))
const Skills = lazy(() => import('@/components/Skills/Skills'))

const Home = (): JSX.Element => {
  const translate = useTranslations('HomePage')
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <Introduce translate={translate} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
      <Information />
      <Mouse />
    </section>
  )
}

export default Home
