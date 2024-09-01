import React, { FC } from 'react'
import { introduce } from '@/styles/body'
import { ThirdAppears, Title } from '@/components/Custom'
import { I_Props_Translate } from '@/types/home'

const Left: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <div className={introduce.leftText}>
      <div className={introduce.hideItem}>
        <Title text={translate('name')} />
      </div>
      <div className={introduce.hideItem}>
        <Title text={translate('job')} />
      </div>
      <div className={introduce.showItem}>
        <Title text={translate('name&job')} />
      </div>
      <ThirdAppears text={translate('passion')} />
    </div>
  )
}

export default Left
