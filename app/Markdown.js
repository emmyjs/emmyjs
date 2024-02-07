import { load } from 'emmy-dom/dist/server.js'

export function index () {
  this.className = 'flex flex-col justify-center items-center text-center w-full h-fit box-border'
  return Emmy.markdown.index
}

load(index, 'Index')

export function rails () {
  this.className = 'flex flex-col justify-center items-center text-center w-full h-fit box-border'
  return Emmy.markdown.rails
}

load(rails, 'Rails')
