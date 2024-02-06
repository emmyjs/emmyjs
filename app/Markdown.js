import { load } from 'emmy-dom/dist/server.js'

export function markdown () {
  this.className = 'flex flex-col justify-center items-center text-center w-full h-fit box-border'

  return Emmy.md
}

load(markdown, 'Markdown')
