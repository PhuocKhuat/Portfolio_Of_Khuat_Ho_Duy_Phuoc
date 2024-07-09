'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DARK, LIGHT } from '@/constants/theme'
import { FC, memo } from 'react'
import themes from './theme.module.css'

const Theme: FC<I_Props_Translate> = ({ translate }) => {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className={`${themes.sizeSun} dark:-rotate-90 dark:scale-0`} />
          <Moon className={`${themes.sizeMoon} dark:rotate-0 dark:scale-100`} />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>{translate('choose-theme')}</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme(LIGHT)} disabled={theme === LIGHT}>
          {translate(LIGHT)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(DARK)} disabled={theme === DARK}>
          {translate(DARK)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(Theme)
