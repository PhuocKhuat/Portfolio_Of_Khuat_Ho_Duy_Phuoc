import { FC } from 'react'
import { Scroll } from '@/components/Custom'
import styles from '@/styles/styles'
import waitLoading from '@/lib/loading'
import Item from '@/components/Introduce/Item'

const Introduce: FC<I_Props_Translate> = async ({ translate }) => {
  await waitLoading(1000)
  return (
    <Scroll>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className='py-3'>
            <Item translate={translate} />
          </div>
        </div>
      </div>
    </Scroll>
  )
}

export default Introduce
