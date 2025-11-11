// scripts/generate-defaults.ts
import ts from 'typescript'
import { writeFileSync, mkdirSync } from 'fs'
import { glob } from 'glob'
import { dirname, resolve, basename } from 'path'

function getDefaultForType(type: string): any {
  if (type.endsWith('[]')) return []
  if (['string', 'String'].includes(type)) return ''
  if (['number', 'Number'].includes(type)) return 0
  if (['boolean', 'Boolean'].includes(type)) return false
  return null
}

function generateDefaultsForTypeNode(
  node: ts.TypeLiteralNode | ts.InterfaceDeclaration,
  checker: ts.TypeChecker
) {
  const defaults: Record<string, any> = {}

  node.members.forEach((member) => {
    if (!ts.isPropertySignature(member) || !member.name) return
    const name = (member.name as ts.Identifier).text
    const typeNode = member.type
    if (!typeNode) return

    const typeStr = checker.typeToString(checker.getTypeFromTypeNode(typeNode))
    defaults[name] = getDefaultForType(typeStr)
  })

  return defaults
}

async function main() {
  const files = await glob('src/**/types.ts', { absolute: true })
  let regenerated = 0

  for (const file of files) {
    const program = ts.createProgram([file], {})
    const checker = program.getTypeChecker()
    const source = program.getSourceFile(file)
    if (!source) continue

    let found = false
    let defaultsObj: any = {}
    let propsTypeName = ''
    const dir = dirname(file)
    const defaultsFile = resolve(dir, 'defaults.ts')

    ts.forEachChild(source, (node) => {
      if (ts.isTypeAliasDeclaration(node) && node.name.text.endsWith('Props')) {
        found = true
        propsTypeName = node.name.text

        if (ts.isIntersectionTypeNode(node.type)) {
          node.type.types.forEach((t) => {
            if (ts.isTypeLiteralNode(t)) {
              Object.assign(
                defaultsObj,
                generateDefaultsForTypeNode(t, checker)
              )
            }
          })
        } else if (ts.isTypeLiteralNode(node.type)) {
          defaultsObj = generateDefaultsForTypeNode(node.type, checker)
        }
      }
    })

    if (!found) continue

    const defaultsBody =
      Object.keys(defaultsObj).length > 0
        ? Object.entries(defaultsObj)
            .map(([key, val]) => {
              if (val === null) return `  ${key}: {},`
              if (Array.isArray(val)) return `  ${key}: [],`
              if (typeof val === 'string') return `  ${key}: '${val}',`
              return `  ${key}: ${val},`
            })
            .join('\n')
        : '  // No se detectaron campos en los tipos.\n'

    const content = `// Archivo generado automáticamente — no editar manualmente
// defaults para ${propsTypeName}

import type * as Types from './types'

export const default${propsTypeName}: Types.${propsTypeName} = {
${defaultsBody}
}
`

    mkdirSync(dir, { recursive: true })
    writeFileSync(defaultsFile, content, 'utf8')
    regenerated++
  }

  console.log(`🎉 Proceso completado (${regenerated} componentes revisados).`)
}

main().catch(console.error)
