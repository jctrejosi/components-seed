import { writeFileSync } from 'fs'
import { glob } from 'glob'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const baseDir = resolve(__dirname, '../src/components')

const files = glob.sync('**/index.tsx', {
  cwd: baseDir,
  ignore: [
    '**/component-example/**',
    '**/component-example/components/**',
    '**/Map/**',
    '**/*.stories.tsx',
    '**/*.test.tsx',
    '**/*.spec.tsx',
  ],
})

const exports = files
  .map((file) => {
    const pathWithoutIndex = file.replace(/[\\/]index\.tsx$/, '')
    const normalized = pathWithoutIndex.replace(/\\/g, '/')
    return `export * from './${normalized}'`
  })
  .sort()

writeFileSync(resolve(baseDir, 'index.ts'), exports.join('\n') + '\n')

console.log(
  `✅ index.ts generado con ${files.length} componentes en /src/components`
)
