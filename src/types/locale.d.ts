interface I_Props_Translate {
  translate: (key: type_string) => type_string
}

interface I_Props_Item_Locale {
  translate: (key: type_string) => type_string
  isPending: boolean
  localeActive: string
}
