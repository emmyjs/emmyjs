import fs from 'node:fs'

const sourceFolderPath = '../emmy-dom'
const destinationFolderPath = './canary-emmy-dom'

const EXACT = 0
const LAZY = 1
const SUPER_LAZY = 2

const RESET = '\x1b[0m'
const RED = '\x1b[31m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'

const red = (string) => `${RED}${string}${RESET}`	
const green = (string) => `${GREEN}${string}${RESET}`
const yellow = (string) => `${YELLOW}${string}${RESET}`

function logCopy(from, to, fileOrFolder, lazy) {
  console.log(
    green('Copying'), `${from}/${fileOrFolder}`,
    green('to'), `${to}/${fileOrFolder}`,
    green('with lazy level'), lazy)
}

function copySync(source, target, fileOrFolder, lazy = EXACT) {
  const from = source + '/' + fileOrFolder
  const to = target + '/' + fileOrFolder
  logCopy(source, target, fileOrFolder, lazy)

  try {
    if (fs.lstatSync(from).isFile()) {
      if (lazy != EXACT && fs.existsSync(to)) return
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true })
      }
      fs.copyFileSync(from, to)
      return
    }

    if (lazy == EXACT) return fs.cpSync(from, to, { recursive: true })
    
    const files = fs.readdirSync(from)
    for (const file of files) {
      if (lazy == SUPER_LAZY && fs.existsSync(to + '/' + file)) {
        console.log(yellow('Skipping'), `${to}/${file}`, yellow('because it already exists'))
        continue
      }
      copySync(from, to, file, 0)
    }
  }
  catch (error) {
    console.error(error.message)
  }
}

copySync(sourceFolderPath, destinationFolderPath, 'package.json')
copySync(sourceFolderPath, destinationFolderPath, 'dist')
copySync(sourceFolderPath, destinationFolderPath, 'node_modules', SUPER_LAZY)
