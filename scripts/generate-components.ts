import { writeFileSync } from 'fs'
import { glob } from 'glob'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// carpeta base (ajustada a tu estructura real)
const baseDir = resolve(__dirname, '../src/components')

// buscar todos los index.tsx dentro de /components
const files = glob.sync('**/index.tsx', { cwd: baseDir })

// generar exports incluyendo toda la ruta relativa (sin /index.tsx)
const exports = files.map((file) => {
  // elimina tanto \index.tsx como /index.tsx del final
  const pathWithoutIndex = file.replace(/[\\/]index\.tsx$/, '')
  // convierte todos los separadores a /
  const normalized = pathWithoutIndex.replace(/\\/g, '/')
  return `export * from './${normalized}'`
})

// escribir el archivo index.ts dentro de /components
writeFileSync(resolve(baseDir, 'index.ts'), exports.join('\n') + '\n')

console.log(
  `✅ index.ts generado con ${files.length} componentes en /src/components`
)
