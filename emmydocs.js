import { html, capitalizeFirstLetter } from '@emmy-dom/dist/server'
import { marked } from 'marked'
import { readFileSync } from 'node:fs'

export const renderMarkdown = async (text) => {
  const htmlText = await marked(text)
  return html`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6">${htmlText}</section>`
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
