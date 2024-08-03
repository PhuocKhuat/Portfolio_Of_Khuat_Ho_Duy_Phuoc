import { FC, useState } from 'react'
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Menu, SquareX } from 'lucide-react'
import Navbar from '@/components/Header/Navbar/Navbar'
import MobiTheme from '@/components/Header/Themes/MobiTheme'
import MobiLocale from '@/components/Header/Locales/MobiLocale'

const MobileNav: FC<I_Props_Translate> = ({ translate }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const drawerClose = () => {
    setIsDrawerOpen(false)
  }
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} direction='bottom'>
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='flex justify-end'>
          <SquareX size={32} color='#ff0000' onClick={drawerClose} className='cursor-pointer' />
        </DrawerHeader>
        <DrawerFooter>
          <DrawerTitle>
            <Navbar translate={translate} drawerClose={drawerClose} />
            <MobiTheme translate={translate} />
            <MobiLocale translate={translate} />
          </DrawerTitle>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNav
