import NotFoundLeft from '@/app/not-found-left'
import NotFoundRight from '@/app/not-found-right'
import styles from '@/styles/styles'
import React, { FC } from 'react'
import avatar_not_found from '/public/imgs/not-found/image_not_found_2.png'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found'
}

const NotFound: FC = () => {
  return (
    <html lang='en'>
      <body>
        <section
          className={`${styles.flexCenter} animate-color-slide text-white font-bold ${styles.textSize} uppercase`}
        >
          <div className={styles.container}>
            <div className={styles.containerWrapper}>
              <div className={`${styles.flexCenter}`}>
                <NotFoundLeft />
                <NotFoundRight avatar_not_found={avatar_not_found} />
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}

export default NotFound
