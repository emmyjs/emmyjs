import { load, Emmy } from 'emmy-dom/server'

Emmy.markdown = {}

export function index ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.index
}

load(index, 'Index')

export function rails ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.rails
}

load(rails, 'Rails')

export function vite ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.vite
}

load(vite, 'Vite')

export function cli ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.cli
}

load(cli, 'Cli')

export function typescript ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.typescript
}

load(typescript, 'Typescript')
