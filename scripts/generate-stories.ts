import * as fs from 'fs'
import * as path from 'path'

const componentsDir = path.resolve(process.cwd(), 'src/components')

/** Elimina todos los archivos .stories.tsx */
function cleanStories(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      cleanStories(fullPath)
    } else if (file.endsWith('.stories.tsx')) {
      fs.unlinkSync(fullPath)
    }
  })
}

/** Busca variables CSS en el archivo .css del componente */
function extractCssVars(componentDir: string): string[] {
  const cssFiles = fs
    .readdirSync(componentDir)
    .filter((f) => f.endsWith('.css'))
  if (cssFiles.length === 0) return []

  const vars = new Set<string>()
  const regex = /var\(\s*(--[a-zA-Z0-9-_]+)\s*(?:,.*)?\)/g

  cssFiles.forEach((cssFile) => {
    const content = fs.readFileSync(path.join(componentDir, cssFile), 'utf-8')
    let m: RegExpExecArray | null
    while ((m = regex.exec(content)) !== null) {
      vars.add(m[1])
    }
  })

  return [...vars]
}

/** Genera la story con argTypes, args y defaults.ts (si existe) */
function generateStory(filePath: string) {
  const dir = path.dirname(filePath)
  const folderName = path.basename(dir)
  const parentFolder = path.basename(path.dirname(dir))
  const componentName = `${parentFolder}${folderName}` // p.ej. ScrollSnapAndromeda

  const storyTitle = `Components/${parentFolder}/${folderName}`
  const importPath = './index'
  const cssVars = extractCssVars(dir)

  const defaultsFile = path.join(dir, 'defaults.ts')
  const hasDefaults = fs.existsSync(defaultsFile)
  const defaultsImport = hasDefaults
    ? `import { defaults } from './defaults';\n`
    : ''

  const argTypesEntries = cssVars
    .map((v) => `    '${v}': { control: 'text', name: '${v}' }`)
    .join(',\n')
  const argTypesBlock =
    cssVars.length > 0 ? `,\n  argTypes: {\n${argTypesEntries}\n  }` : ''

  const argsBlock = hasDefaults
    ? `\n  args: {\n    ...defaults,\n${cssVars.map((v) => `    '${v}': ''`).join(',\n')}\n  }`
    : cssVars.length > 0
      ? `\n  args: {\n${cssVars.map((v) => `    '${v}': ''`).join(',\n')}\n  }`
      : ''

  const renderBlock =
    cssVars.length > 0 || hasDefaults
      ? `,
  render: (args) => {
    const cssVars: Record<string,string> = {}
    Object.keys(args).forEach((k) => {
      if (k.startsWith('--') && args[k]) {
        cssVars[k] = args[k] as string
      }
    })
    return (
      <div style={cssVars}>
        <${componentName} {...args} />
      </div>
    )
  }`
      : ''

  const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from '${importPath}';
${defaultsImport}
const meta: Meta<any> = {
  title: '${storyTitle}',
  component: ${componentName}${argTypesBlock}${renderBlock},
};
export default meta;

type Story = StoryObj<any>;

export const Default: Story = {${argsBlock}
};
`

  const storyFile = path.join(dir, `${componentName}.stories.tsx`)
  fs.writeFileSync(storyFile, storyContent, 'utf-8')
}

/** Recorre componentes y genera stories */
function walkDir(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      walkDir(fullPath)
    } else if (
      file.endsWith('.tsx') &&
      !file.endsWith('.stories.tsx') &&
      !file.endsWith('.test.tsx') &&
      file === 'index.tsx' // Solo generamos stories si es un index.tsx
    ) {
      generateStory(fullPath)
    }
  })
}

// Ejecuta
cleanStories(componentsDir)
walkDir(componentsDir)
