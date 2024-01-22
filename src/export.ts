import * as fs from 'fs'
import * as path from 'path'
import { getComponentAsString } from './index'

const componentName = 'Table'

function ensureDirectoryExistence(filePath: string): void {
  const dirname = path.dirname(filePath)

  if (fs.existsSync(dirname)) {
    return
  }

  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

function exportComponent(destination: string): void {
  const componentCode: string = getComponentAsString()
  const filePath: string = path.join(destination, componentName, 'index.tsx')

  ensureDirectoryExistence(filePath)

  fs.writeFileSync(filePath, componentCode, 'utf8')

  console.log(`Component code written to ${filePath}`)
}

// The first argument is the destination path in the user's project
const destination: string = process.argv[2] || 'src/components'

exportComponent(destination)
