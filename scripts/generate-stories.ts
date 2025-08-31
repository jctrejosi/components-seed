import * as fs from 'fs'
import * as path from 'path'

const componentsDir = path.resolve(process.cwd(), 'src/components')

// Elimina todos los archivos .stories.tsx en una carpeta
function cleanStories(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      cleanStories(fullPath)
    } else if (file.endsWith('.stories.tsx')) {
      fs.unlinkSync(fullPath)
      console.log(`Story eliminada: ${fullPath}`)
    }
  })
}

function generateStory(filePath: string) {
  const dir = path.dirname(filePath)
  const folderName = path.basename(dir) // carpeta del componente
  const parentFolder = path.basename(path.dirname(dir)) // carpeta padre

  const componentName = `${parentFolder}${folderName}` // ScrollSnapAndromeda

  // Título único con carpeta padre y carpeta del componente
  const storyTitle = `Components/${parentFolder}/${folderName}`

  const importPath = './index' // importa desde index.tsx

  const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from '${importPath}';

const meta: Meta<typeof ${componentName}> = {
  title: '${storyTitle}',
  component: ${componentName},
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {},
};
`

  const storyFile = path.join(dir, `${componentName}.stories.tsx`)
  fs.writeFileSync(storyFile, storyContent, 'utf-8')
  console.log(`Story creada: ${storyFile}`)
}

function walkDir(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      walkDir(fullPath)
    } else if (
      file.endsWith('.tsx') &&
      !file.endsWith('.stories.tsx') &&
      !file.endsWith('.test.tsx')
    ) {
      generateStory(fullPath)
    }
  })
}

// Primero limpia cualquier story existente
cleanStories(componentsDir)

// Luego genera las nuevas stories
walkDir(componentsDir)
