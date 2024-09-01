import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import styles from '@/styles/styles'
import Link from 'next/link'
import { I_Props_ProjectItem } from '@/types/home'

const ProjectItem: React.FC<I_Props_ProjectItem> = ({ list, translate }) => {
  const projectListRender = list.map((project) => (
    <AspectRatio key={project.index} ratio={16 / 5} className='relative cursorScaleView'>
      <span className={`absolute -top-9 right-0 z-10 ${styles.bigTitle}`}>{project.number}</span>
      <Link href={project.url} target='_blank'>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={project.img} alt='Photo by Drew Beamer' fill className='h-full w-full rounded-2xl object-cover' />
      </Link>
      <div className='absolute left-0 -bottom-16'>
        <p className='text-xs text-gray-300'>
          {translate(project.time)} || {translate('development')}
        </p>
        <strong className={`uppercase relative -bottom-2 left-0 text-2xl lg:text-3xl text-slate-500`}>
          {translate(project.name)}
        </strong>
      </div>
    </AspectRatio>
  ))
  return <>{projectListRender}</>
}

export default ProjectItem
