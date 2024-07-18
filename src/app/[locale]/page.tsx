import { useTranslations } from 'next-intl'
import { lazy, Suspense } from 'react'
import Mouse from '@/components/Mouse/Mouse'
import Loading from '@/app/[locale]/loading'

const Introduce = lazy(() => import('@/components/Introduce/Introduce'))
const About = lazy(() => import('@/components/About/About'))

const Home = (): JSX.Element => {
  const translate = useTranslations('HomePage')
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <Introduce translate={translate} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Mouse />
    </section>
  )
}

export default Home
