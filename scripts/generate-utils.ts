import { readdirSync, writeFileSync } from 'fs'
import { basename, dirname, extname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const utilsDir = resolve(__dirname, '../src/utils')
const indexPath = join(utilsDir, 'index.ts')

const files = readdirSync(utilsDir).filter((file) => {
  const isTSFile = ['.ts'].includes(extname(file))
  return isTSFile && file !== 'index.ts'
})

const exports = files.map((file) => {
  const name = basename(file, extname(file))
  return `export * from './${name}.ts'`
})

writeFileSync(indexPath, exports.join('\n') + '\n')

console.log(`✅ index.ts generado con ${files.length} archivos en /utils`)
