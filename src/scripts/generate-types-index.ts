import { writeFileSync } from 'fs'
import { glob } from 'glob'
import { basename, dirname, relative, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Patrones
const componentsPattern = resolve(__dirname, '../components/**/**/**/types.ts')
const manualTypesPattern = resolve(__dirname, '../types/*.ts')

// Obtener archivos
const componentFiles = glob.sync(componentsPattern)
const manualFiles = glob
  .sync(manualTypesPattern)
  .filter((file) => basename(file) !== 'index.ts')

// Combinar y mapear
const allFiles = [...componentFiles, ...manualFiles]

const exports = allFiles.map((file) => {
  const relativePath = relative(resolve(__dirname, '../types'), file)
  const importPath = relativePath.replace(/\.ts$/, '').replace(/\\/g, '/')
  return `export * from './${importPath}.ts';`
})

// Escribir archivo
writeFileSync(
  resolve(__dirname, '../types/index.ts'),
  exports.join('\n') + '\n'
)
console.log(`✅ index.ts generado con ${allFiles.length} archivos en /types`)
