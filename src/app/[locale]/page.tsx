import Mouse from '@/components/Mouse/Mouse'
import Loading from '@/app/[locale]/loading'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const Introduce = dynamic(() => import('@/components/Introduce/Introduce'), { loading: () => <Loading /> })
const Skills = dynamic(() => import('@/components/Skills/Skills'), { loading: () => <Loading /> })
const Information = dynamic(() => import('@/components/Information/Information'), { loading: () => <Loading /> })
const Projects = dynamic(() => import('@/components/Projects/Projects'), { loading: () => <Loading /> })
const Work = dynamic(() => import('@/components/Work/Work'), { loading: () => <Loading /> })
const Contact = dynamic(() => import('@/components/Contact/Contact'), { loading: () => <Loading /> })

export const metadata: Metadata = {
  title: 'HomePage'
}

const Home = (): JSX.Element => {
  const translate = useTranslations('HomePage')
  return (
    <main>
      <Introduce translate={translate} />
      <Skills translate={translate} />
      <Information translate={translate} />
      <Projects translate={translate} />
      <Work translate={translate} />
      <Contact translate={translate} />
      <Mouse />
    </main>
  )
}

export default Home
