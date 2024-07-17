import React, { FC } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import Navbar from '@/components/Header/Navbar/Navbar'
import styles from '@/styles/styles'
import MobiTheme from '@/components/Header/Themes/MobiTheme'
import MobiLocale from '@/components/Header/Locales/MobiLocale'
import { Menu } from 'lucide-react'
import { mobileNav } from '@/styles/home'

const MobileNav: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className='me-10'>
          {/* MENU */}
          <NavigationMenuTrigger>
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent className={`bg-opacity-10 ${mobileNav.customSize} ${styles.textCenter}`}>
            {/* NAVBAR */}
            <NavigationMenuLink>
              <Navbar translate={translate} />
            </NavigationMenuLink>
            {/* MOBI THEME */}
            <NavigationMenuLink>
              <MobiTheme translate={translate} />
            </NavigationMenuLink>
            {/* MOBI LOCALE */}
            <NavigationMenuLink>
              <MobiLocale translate={translate} />
            </NavigationMenuLink>
            {/*  */}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MobileNav
