import { build, javascript, Emmy } from 'emmy-dom/dist/server'
import { about } from './app/About'
import { app, App } from './app/App'
import { counter } from './app/components/Counter'
import { header } from './app/components/Header'
import { pill } from './app/components/Pill'
import { row } from './app/components/Row'
import { search } from './app/components/Search'
import { underConstruction } from './app/components/UnderConstruction'
import { docs } from './app/Docs'
import { home } from './app/Home'
import { status } from './app/Status'
import { saveMarkdown } from './emmydocs'
import * as markdown from './app/Markdown'

await saveMarkdown(Emmy, Object.keys(markdown))

build({
  app: App,
  dependencies: javascript`
    import { load, html, jsx, Router, Route, Emmy, loadGlobalEmmy as lge } from 'emmy-dom'
    lge(${JSON.stringify(Emmy)})
    import Toastify from 'toastify-js'
    import 'toastify-js/src/toastify.css'
    import MiniSearch from 'minisearch'
  `,
  generators: {
    about, app, docs, home, ...markdown, status,
    counter, header, pill, row, search, underConstruction
  },
  template: './template.html'
})
