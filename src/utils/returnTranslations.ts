export type TranslationResourceT =
  | Record<string, string> // cualquier idioma como clave
  | string

export const returnTranslation = (resource: TranslationResourceT): string => {
  if (typeof resource === 'string') return resource

  // Tomamos los idiomas que el navegador reporta
  const browserLangs = navigator.languages.map((l) => l.slice(0, 2))

  // Buscamos el primer idioma disponible en el resource
  const foundLang = browserLangs.find((lang) => resource[lang] !== undefined)
  if (foundLang) return resource[foundLang]

  // Si no hay coincidencia, usamos 'es' si existe
  if (resource['es']) return resource['es']

  // Si tampoco hay 'es', devolvemos la primera clave existente
  const keys = Object.keys(resource)
  if (keys.length > 0) return resource[keys[0]]

  // Si el objeto está vacío, devolvemos un string vacío
  return ''
}
