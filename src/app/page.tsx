import { redirect } from 'next/navigation'

const RootPage = (): string => {
  redirect('/en')
}

export default RootPage
