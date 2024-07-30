import { load, html } from 'emmy-dom/server'
import './Pill'

export function row ({ props, children }) {
  return html`
    <li class='py-3 sm:py-4 justify-between space-x-3 rtl:space-x-reverse flex items-center gap-5'>
      <p class='text-sm font-semibold text-gray-900 truncate dark:text-white'>
        ${children()}
      </p>
      <Pill type='${props().status()}' />
    </li>
  `
}

load(row, 'Row')
