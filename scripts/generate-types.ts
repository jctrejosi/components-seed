import { writeFileSync } from 'fs'
import { glob } from 'glob'
import { basename, dirname, resolve, relative } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// rutas base
const componentsDir = resolve(__dirname, '../src/components')
const typesDir = resolve(__dirname, '../src/types')

// buscar archivos types.ts
const componentFiles = glob.sync('**/types.ts', {
  cwd: componentsDir,
  absolute: true,
})
const manualFiles = glob
  .sync('*.ts', { cwd: typesDir, absolute: true })
  .filter((file) => basename(file) !== 'index.ts')

// unir todos
const allFiles = [...componentFiles, ...manualFiles]

// generar rutas relativas al directorio /src/types
const exports = allFiles.map((file) => {
  // ruta relativa desde src/types
  let rel = relative(typesDir, file)
  rel = rel.replace(/\\/g, '/')

  // si el archivo está fuera de types, agregar ./ delante
  if (!rel.startsWith('.')) rel = './' + rel

  // asegurar extensión .ts
  rel = rel.replace(/\.ts$/, '.ts')

  return `export * from '${rel}'`
})

// escribir archivo en src/types
writeFileSync(resolve(typesDir, 'index.ts'), exports.join('\n') + '\n')

console.log(
  `✅ index.ts generado con ${allFiles.length} archivos en /src/types`
)
