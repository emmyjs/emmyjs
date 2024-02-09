import { load } from 'emmy-dom/dist/server.js'

export function index () {
  this.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.index
}

load(index, 'Index')

export function rails () {
  this.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.rails
}

load(rails, 'Rails')

export function vite () {
  this.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.vite
}

load(vite, 'Vite')

export function cli () {
  this.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.cli
}

load(cli, 'Cli')
