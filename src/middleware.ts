import { ENG, VIE } from '@/constants/locale'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: [ENG, VIE],

  // Used when no locale matches
  defaultLocale: ENG
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(vie|en)/:path*`]
}
