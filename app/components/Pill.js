import { load } from 'emmy-dom/dist/server'

export function pill ({ el, props }) {
  const { type } = props()
  if (!type()) return ''

  const colors = {
    unstable: 'bg-yellow-900 text-yellow-300',
    stable: 'bg-green-900 text-green-300',
    deprecated: 'bg-red-900 text-red-300',
    experimental: 'bg-purple-900 text-purple-300',
    planned: 'bg-blue-900 text-blue-300'
  }
  let color = colors[type().trim()]

  el.className = `${color} inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium`

  return type().charAt(0).toUpperCase() + type().slice(1)
}

load(pill, 'Pill')
