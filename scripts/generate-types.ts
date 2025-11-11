// scripts/generate-types.ts
import { writeFileSync, mkdirSync } from 'fs'
import { glob } from 'glob'
import { relative, resolve, basename } from 'path'

async function main() {
  const base = resolve('src')
  const componentsDir = resolve(base, 'components')
  const typesDir = resolve(base, 'types')
  const outputFile = resolve(typesDir, 'index.ts')

  // archivos en components (types/props/interfaces)
  const compFiles = await glob('**/*{types,props,interfaces}.ts', {
    cwd: componentsDir,
    absolute: true,
  })

  // archivos dentro de src/types (recursivo), excepto index.ts
  const manualFiles = await glob('**/*.ts', { cwd: typesDir, absolute: true })
  const manualFiltered = (manualFiles || []).filter(
    (f) => basename(f) !== 'index.ts'
  )

  // combinar y deduplicar
  const set = new Set<string>([...(compFiles || []), ...manualFiltered])
  const allFiles = Array.from(set)

  if (allFiles.length === 0) {
    console.log('// No se detectaron archivos con tipos.')
    return
  }

  // asegurar carpeta de salida
  mkdirSync(typesDir, { recursive: true })

  // generar líneas de export ordenadas
  const lines = allFiles
    .map((file) => {
      let rel = relative(typesDir, file).replace(/\\/g, '/')
      rel = rel.replace(/\.ts$/, '')
      return rel.startsWith('.') ? rel : './' + rel
    })
    .sort((a, b) => a.localeCompare(b))
    .map((rel) => `export * from '${rel}'`)

  writeFileSync(outputFile, lines.join('\n') + '\n', 'utf8')
  console.log(
    `✅ index.ts generado con ${allFiles.length} archivos en ${typesDir}`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
