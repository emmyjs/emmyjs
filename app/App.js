import { load, html, capitalizeFirstLetter } from 'emmy-dom/dist/server.js'
import './Home.js'
import './Docs.js'
import './Status.js'
import './components/Header.js'
import { saveDocumentationRoutes } from '../emmydocs.js'
import * as markdown from './Markdown.js'

const Emmy = {}

saveDocumentationRoutes(Emmy, Object.keys(markdown))

load('/Code404.html', 'Code404')

export function app () {
  this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full h-full box-border'

  return html`
    <Header></Header>
    <Route href='/' to='Home'></Route>
    <Route href='/docs' to='Docs'></Route>
    ${Emmy.markdownRoutes}
    <Route href='/404' to='Code404'></Route>
    <Route href='/status' to='Status'></Route>
    <Router></Router>
  `
}

export const App = load(app, 'App')
