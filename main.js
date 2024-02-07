import { build, html } from 'emmy-dom/dist/server.js'
import { marked } from 'marked'
import { readFileSync } from 'node:fs'
import { app, App } from './app/App.js'
import { counter } from './app/components/Counter.js'
import { header } from './app/components/Header.js'
import { pill } from './app/components/Pill.js'
import { row } from './app/components/Row.js'
import { underConstruction } from './app/components/UnderConstruction.js'
import { docs } from './app/Docs.js'
import { home } from './app/Home.js'
import * as markdown from './app/Markdown.js'
import { status } from './app/Status.js'

const Emmy = {}

const renderMarkdown = async (text) => {
  const htmlText = await marked(text)
  return html`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 sm:w-[90%] md:w-[70%] h-fit box-border gap-6">${htmlText}</section>`
    .replace(/`/g, '\`')
    .replace(/\${/g, '\${')
    .replace(/<a/g, '<a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 " ')
    .replace(/<ul/g, '<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" ')
    .replace(/<ol/g, '<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" ')
    .replace(/<h1/g, '<h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" ')
    .replace(/<h2/g, '<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" ')
    .replace(/<h3/g, '<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" ')
    .replace(/<h4/g, '<h4 class="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-300" ')
    .replace(/&#39;/g, "'")
}

const saveMarkdown = async (filenames) => {
  Emmy.markdown = {}
  for (const filename of filenames) {
    const file = readFileSync(`./public/markdown/${filename}.md`, 'utf-8')
    Emmy.markdown[filename] = await renderMarkdown(file)
  }
}

await saveMarkdown(['index', 'rails'])

build({
  app: App,
  dependencies: /*javascript*/`
    const Emmy = ${JSON.stringify(Emmy)}
    import { load, html, Router, Route } from 'emmy-dom'
    import Toastify from 'toastify-js'
    import 'toastify-js/src/toastify.css'
  `,
  generators: {
    app, docs, home, ...markdown, status,
    counter, header, pill, row, underConstruction
  },
  template: './template.html'
})
