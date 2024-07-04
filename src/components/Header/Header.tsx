import React, { FC } from 'react'
import header from './header.module.css'
import styles from '@/styles/styles'

const Header: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={header.menuWrapper}>
            <div className={header.menuFlex}>
              <div className='logo'>Header</div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
