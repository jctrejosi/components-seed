import { writeFileSync } from 'fs'
import { glob } from 'glob'
import { dirname, relative, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Busca todos los index.tsx de componentes
const pattern = resolve(__dirname, '../components/**/index.tsx')
const files = glob.sync(pattern)

// Genera los exports relativos desde /components
const exports = files.map((file) => {
  const relativePath = relative(resolve(__dirname, '../components'), file)
  const importPath =
    './' + relativePath.replace(/\/index\.tsx$/, '').replace(/\\/g, '/')
  return `export * from '${importPath}'`
})

// Escribe el archivo index.ts final en /components
writeFileSync(
  resolve(__dirname, '../components/index.ts'),
  exports.join('\n') + '\n'
)
console.log(
  `✅ index.ts generado con ${files.length} componentes en /components`
)
