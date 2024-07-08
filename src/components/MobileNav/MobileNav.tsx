import React, { FC } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Menu } from 'lucide-react'
import Navbar from '@/components/Navbar/Navbar'
import mobileNav from './mobileNav.module.css'
import styles from '@/styles/styles'
import MobiTheme from '@/components/Themes/MobiTheme'
import MobiLocale from '@/components/Locales/MobiLocale'
import { I_Props_Translate } from '@/components/Header/Header'

const MobileNav: FC<I_Props_Translate> = ({ translate }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className={mobileNav.transitions}>
          {/* MENU */}
          <NavigationMenuTrigger>
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent className={`${mobileNav.backgroundSize} ${mobileNav.customSize} ${styles.textCenter}`}>
            {/* NAVBAR */}
            <NavigationMenuLink>
              <Navbar translate={translate} />
            </NavigationMenuLink>
            {/* MOBI THEME */}
            <NavigationMenuLink>
              <MobiTheme />
            </NavigationMenuLink>
            {/* MOBI LOCALE */}
            <NavigationMenuLink>
              <MobiLocale />
            </NavigationMenuLink>
            {/*  */}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MobileNav