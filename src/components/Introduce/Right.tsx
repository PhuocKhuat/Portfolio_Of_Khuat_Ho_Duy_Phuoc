import React, { FC } from 'react'
import { introduce } from '@/styles/body'
import { FirstAppears, SecondAppears, ThirdAppears, Title } from '@/components/Custom'
import { I_Props_Translate } from '@/types/home'

const Right: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <div className={introduce.rightText}>
      <Title text={translate('title-about')} />
      <div className={introduce.hideItem}>
        <FirstAppears text={translate('full-name')} />
        <SecondAppears text={translate('education')} />
        <ThirdAppears text={translate('habitat')} />
      </div>
      <div className={introduce.showItem}>
        <FirstAppears text={translate('full-about')} />
      </div>
      <br />
      <Title text={translate('title-work')} />
      <div className={introduce.hideItem}>
        <FirstAppears text={translate('work')} />
        <SecondAppears text={translate('role')} />
      </div>
      <div className={introduce.showItem}>
        <FirstAppears text={translate('full-work')} />
      </div>
    </div>
  )
}

export default Right
