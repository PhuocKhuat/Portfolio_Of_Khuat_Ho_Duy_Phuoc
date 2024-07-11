import { FC, memo, useTransition } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ENG, VIE } from '@/constants/locale'

const Locale: FC<I_Props_Translate> = ({ translate }) => {
  const [isPending, startTransiton] = useTransition()
  const router = useRouter()
  const localeActive = useLocale()
  const handleChangeValue = (value: string) => {
    startTransiton(() => {
      router.replace(`/${value}`)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Choose languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={localeActive} onValueChange={handleChangeValue}>
          <DropdownMenuRadioItem value={ENG} disabled={isPending}>
            {translate(ENG)}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={VIE} disabled={isPending}>
            {translate(VIE)}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(Locale)
