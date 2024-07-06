import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { ENG, VIE } from '@/constants/locale'

const locales = [ENG, VIE]

type Messages = { [key: string]: string }

interface ImportResult {
  default: Messages
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound()
  }
  const importedMessages = (await import(`../../messages/${locale}.json`)) as ImportResult

  const messages = importedMessages.default
  return {
    messages
  }
})
