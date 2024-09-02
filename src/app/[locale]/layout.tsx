import './globals.css'
import Header from '@/components/Header/Header'
import ThemeProvider from '@/app/theme'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { montserrat } from '@/fonts/font'
import styles from '@/styles/styles'
import { I_Props_RootLayout } from '@/types/home'

const HomeLayout = async ({ children, params: { locale } }: Readonly<I_Props_RootLayout>): Promise<JSX.Element> => {
  const messages = await getMessages()
  return (
    <html lang={locale} className={`${montserrat.className} ${styles.textSize}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default HomeLayout
