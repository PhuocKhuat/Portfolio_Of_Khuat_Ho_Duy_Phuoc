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
import Locale from '@/components/Locales/Locale'
import Toggle from '@/components/Themes/Toggle'
import Navbar from '@/components/Navbar/Navbar'
import mobileNav from './mobileNav.module.css'
import styles from '@/styles/styles'

const MobileNav: FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent className={`${mobileNav.backgroundSize} ${styles.gridGap}`}>
            <NavigationMenuLink>
              <Navbar />
            </NavigationMenuLink>
            <NavigationMenuLink className={mobileNav.flexWrap}>
              <Toggle />
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Locale />
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MobileNav
