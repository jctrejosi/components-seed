import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// Compatibilidad con ESM: recrear __dirname y __filename
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function processCssFile(filePath: string): void {
  const content = fs.readFileSync(filePath, 'utf-8')
  const regex = /var\((--[a-zA-Z0-9-_]+)\)/g
  const matches = new Set<string>()
  let m: RegExpExecArray | null

  while ((m = regex.exec(content)) !== null) {
    matches.add(m[1])
  }

  // Si no hay variables CSS, no agregamos cabecera
  if (matches.size === 0) return

  const header =
    `/*\nVariables usadas:\n` +
    [...matches].map((v) => `  ${v}`).join('\n') +
    `\n*/\n`

  // Elimina cualquier bloque de comentario inicial previo
  const newContent = content.replace(/^\/\*[\s\S]*?\*\/\n/, '')
  fs.writeFileSync(filePath, header + newContent, 'utf-8')
}

function walkDir(dir: string): void {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      walkDir(fullPath)
    } else if (file.endsWith('.css')) {
      processCssFile(fullPath)
      console.log(`Archivo actualizado: ${fullPath}`)
    }
  })
}

// Ajusta esta ruta si tu estructura es distinta
const baseDir = path.resolve(__dirname, '../components')
walkDir(baseDir)
