import { load, html, Emmy } from 'emmy-dom/dist/server'
import { saveDocumentationRoutes } from '../emmydocs'
import * as markdown from './Markdown'

saveDocumentationRoutes(Emmy, Object.keys(markdown))

export function app ({ el }) {
  el.className = 'flex flex-col justify-space-between gap-2 text-center w-full h-full box-border'

  return html`
    <Header />
    <Route href='/' to='Home' />
    <Route href='/our-story' to='About' />
    <Route href='/getting-started' to='Docs' />
    <Route href='/docs' to='Docs' />
    <Route href='/status' to='Status' />
    ${Emmy.markdownRoutes}
    <Route href='/404' to='Code404' />
    <Router />
    <Footer />
  `
}

export const App = await load(app, 'App')
