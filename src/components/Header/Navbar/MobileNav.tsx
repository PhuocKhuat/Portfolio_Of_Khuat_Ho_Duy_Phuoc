import React, { FC } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Menu, SquareX } from 'lucide-react'
import Navbar from '@/components/Header/Navbar/Navbar'
import MobiTheme from '@/components/Header/Themes/MobiTheme'
import MobiLocale from '@/components/Header/Locales/MobiLocale'

const MobileNav: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <Drawer direction='left'>
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose className='flex justify-end'>
            <SquareX size={32} color='#ff0000' />
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerTitle>
            <Navbar translate={translate} />
            <MobiTheme translate={translate} />
            <MobiLocale translate={translate} />
          </DrawerTitle>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNav
