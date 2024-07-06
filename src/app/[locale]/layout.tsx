import type { Metadata } from 'next'
import './globals.css'
import Header from 'src/components/Header/Header'

import ThemeProvider from '@/app/theme'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { playfairDisplay } from '@/styles/font'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const LocaleLayout = async ({ children, params: { locale } }: Readonly<I_RootLayout_Props>): Promise<JSX.Element> => {
  const messages = await getMessages()
  return (
    <html lang={locale} className={playfairDisplay.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
