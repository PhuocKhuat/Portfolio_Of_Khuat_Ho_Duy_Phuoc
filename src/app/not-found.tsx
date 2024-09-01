import NotFoundLeft from '@/app/not-found-left'
import NotFoundRight from '@/app/not-found-right'
import styles from '@/styles/styles'
import React, { FC } from 'react'

const NotFound: FC = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.verticalWrapper}></div>
          <div className='flex justify-between items-center'>
            <NotFoundLeft />
            <NotFoundRight />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
