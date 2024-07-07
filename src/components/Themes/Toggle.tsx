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
import { memo } from 'react'
import theme from './theme.module.css'

const ModeToggle = (): JSX.Element => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className={`${theme.sizeSun} dark:-rotate-90 dark:scale-0`} />
          <Moon className={`${theme.sizeMoon} dark:rotate-0 dark:scale-100`} />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme(LIGHT)}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(DARK)}>Dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(ModeToggle)
