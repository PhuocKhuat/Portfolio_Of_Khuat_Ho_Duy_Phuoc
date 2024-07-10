interface I_RootLayout_Props {
  children: React.ReactNode
  params: {
    locale: string
  }
}
interface I_Props_Translate {
  translate: (key: string) => string
}
