export type TranslationResourceT =
  | Record<string, string>
  | string
  | undefined
  | null

export const returnTranslation = (resource: TranslationResourceT): string => {
  if (!resource) return ''

  if (typeof resource === 'string') return resource

  const browserLangs = navigator.languages.map((l) => l.slice(0, 2))

  const foundLang = browserLangs.find((lang) => resource[lang] !== undefined)
  if (foundLang) return resource[foundLang]

  if (resource.es) return resource.es

  const keys = Object.keys(resource)
  return keys.length ? resource[keys[0]] : ''
}
