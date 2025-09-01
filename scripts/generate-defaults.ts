import { Project, Type } from 'ts-morph'
import * as fs from 'fs'
import * as path from 'path'

const componentsDir = path.resolve(process.cwd(), 'src/components')

const project = new Project({
  tsConfigFilePath: path.resolve(process.cwd(), 'tsconfig.json'),
})

function createMockValue(type: Type, propName?: string): string {
  if (
    propName?.toLowerCase().includes('image') ||
    propName?.toLowerCase().includes('background')
  ) {
    return '"https://via.placeholder.com/150"'
  }
  if (type.getText() === 'React.ReactNode') {
    return '<div>Example</div>'
  }
  if (type.isString()) return '"example"'
  if (type.isNumber()) return '0'
  if (type.isBoolean()) return 'true'
  if (type.isArray()) {
    const elemType = type.getArrayElementType()
    return elemType ? `[${createMockValue(elemType)}]` : '[]'
  }
  if (type.isObject()) {
    const props = type.getProperties().map((p) => {
      const valDecl = p.getValueDeclaration() || p.getDeclarations()[0]
      if (!valDecl) return `${p.getName()}: null`
      const pType = p.getTypeAtLocation(valDecl)
      return `${p.getName()}: ${createMockValue(pType, p.getName())}`
    })
    return `{ ${props.join(', ')} }`
  }
  return 'null'
}

function generateDefaults(filePath: string) {
  const sourceFile = project.addSourceFileAtPath(filePath)
  const exports = sourceFile.getExportedDeclarations()

  exports.forEach((decls, name) => {
    if (!name.endsWith('Props')) return

    const decl = decls[0]
    const type = decl.getType().getApparentType()

    const props = type
      .getProperties()
      .filter((p) => p.getName() !== 'translations') // omitimos translations
      .map((p) => {
        const valDecl = p.getValueDeclaration() || p.getDeclarations()[0]
        if (!valDecl) return `${p.getName()}: null`
        const pType = p.getTypeAtLocation(valDecl)
        return `${p.getName()}: ${createMockValue(pType, p.getName())}`
      })

    const defaultsCode = `
import type { ${name} } from './types';

const defaults: ${name} = {
  ${props.join(',\n  ')}
};

export default defaults;
`

    const outFile = path.join(path.dirname(filePath), 'defaults.ts')
    fs.writeFileSync(outFile, defaultsCode, 'utf8')
    console.log(`Generado defaults.ts para ${name} en ${outFile}`)
  })
}

function walk(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      walk(fullPath)
    } else if (file === 'types.ts') {
      generateDefaults(fullPath)
    }
  })
}

walk(componentsDir)
