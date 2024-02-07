import { build } from 'emmy-dom/dist/server.js'
import { app, App } from './app/App.js'
import { counter } from './app/components/Counter.js'
import { header } from './app/components/Header.js'
import { pill } from './app/components/Pill.js'
import { row } from './app/components/Row.js'
import { underConstruction } from './app/components/UnderConstruction.js'
import { docs } from './app/Docs.js'
import { home } from './app/Home.js'
import { status } from './app/Status.js'
import { saveMarkdown } from './emmydocs.js'
import * as markdown from './app/Markdown.js'

const Emmy = {}

await saveMarkdown(Emmy, Object.keys(markdown))

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
