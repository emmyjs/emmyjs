import { html, capitalizeFirstLetter } from 'emmy-dom/dist/server'
import { marked } from 'marked'
import { readFileSync } from 'node:fs'

export const renderMarkdown = async (text) => {
  const htmlText = await marked(text)
  return html`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6">${htmlText}</section>`
    .replace(/`/g, '\`')
    .replace(/\${/g, '\${')
    .replace(/&#39;/g, "'")
}

export const saveDocumentationRoutes = (obj, filenames) => {
  obj.markdownRoutes = filenames.map(key => {
    if (key === 'index') return html`<Route href='/documentation' to='Index'></Route>`
    return html`<Route href='/documentation/${key}' to='${capitalizeFirstLetter(key)}'></Route>`
  }).join('\n')
}

export const saveMarkdown = async (obj, filenames) => {
  obj.markdown = {}
  for (const filename of filenames) {
    const file = readFileSync(`./public/markdown/${filename}.md`, 'utf-8')
    obj.markdown[filename] = await renderMarkdown(file)
  }
  saveDocumentationRoutes(obj, filenames)
}
