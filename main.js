import { build } from 'emmy-dom/dist/server.js'
import { app, App } from './app/App.js'
import { counter } from './app/components/Counter.js'
import { header } from './app/components/Header.js'
import { pill } from './app/components/Pill.js'
import { row } from './app/components/Row.js'
import { underConstruction } from './app/components/UnderConstruction.js'
import { docs } from './app/Docs.js'
import { home } from './app/Home.js'
import { markdown } from './app/Markdown.js'
import { status } from './app/Status.js'
import { marked } from 'marked'
import { readFileSync } from 'node:fs'

const md = readFileSync('./public/1.0.0.md', 'utf-8')

let result = `<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 sm:w-[90%] md:w-[70%] h-fit box-border gap-6">${await marked(md)}</section>`
  .replace(/&#39;/g, "'").replace(/`/g, '\\`').replace(/\${/g, '\\${')
  .replace(/<h1>/g, '<h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-300">')
  .replace(/<h2>/g, '<h2 class="text-3xl font-extrabold mb-2 text-emerald-300">')

build({
  app: App,
  dependencies: /*javascript*/`
    import { load, html, Router, Route } from 'emmy-dom'
    import Toastify from 'toastify-js'
    import 'toastify-js/src/toastify.css'
    const Emmy = {}
    Emmy.md = \`${result}\`
  `,
  generators: {
    app, docs, home, row, status, counter, header, pill, markdown,
    underConstruction
  },
  template: './template.html'
})
