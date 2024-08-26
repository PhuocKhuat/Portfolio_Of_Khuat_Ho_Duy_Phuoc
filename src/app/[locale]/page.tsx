import Work from '@/components/Work/Work'
import Mouse from '@/components/Mouse/Mouse'
import Loading from '@/app/[locale]/loading'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Contact from '@/components/Contact/Contact'

const Introduce = dynamic(() => import('@/components/Introduce/Introduce'), { loading: () => <Loading /> })
const Skills = dynamic(() => import('@/components/Skills/Skills'), { loading: () => <Loading /> })
const Information = dynamic(() => import('@/components/Information/Information'), { loading: () => <Loading /> })

const Home = (): JSX.Element => {
  const translate = useTranslations('HomePage')
  return (
    <main>
      <Introduce translate={translate} />
      <Skills translate={translate} />
      <Information />
      <Work />
      <Contact />
      <Mouse />
    </main>
  )
}

export default Home
