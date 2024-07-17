import { load, html } from 'emmy-dom/dist/server'
import './components/Counter'

export function home ({ el }) {
  el.className = 'flex flex-col justify-between items-center text-center w-full h-[80dvh] gap-4'
  
  return html`
    <main class='flex flex-col justify-center items-center gap-6 max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl'>
      <h1 class='text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Hello from Emmy.js!</h1>
      <h2 class='text-2xl font-bold text-gray-800 dark:text-gray-200 text-balance'>
        A tiny simple way for building user interfaces using 
        <strong class='text-emerald-600 dark:text-emerald-300'>Functional Web Components</strong>
      </h2>
      <p class='text-xl'>
        Run <code style='font-family: source-code-pro, Menlo, Monaco, Consolas'>
          npm install emmy-dom
        </code> and start building your app!
      </p>
      <a href='/getting-started' class='inline-flex items-center justify-center p-5 text-base font-medium rounded-lg text-gray-500 bg-gray-50 border border-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white'>
        <img class='hidden dark:block w-6 h-6 mr-2' src='/logo.png' alt='Emmy.js logo'>
        <img class='dark:hidden w-6 h-6 mr-2' src='/android-chrome-512x512.png' alt='Emmy.js logo'>
        <span class='w-full'>Get started with Emmy.js</span>
        <svg class='w-4 h-4 ml-2' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
        </svg>
      </a>
      <Counter />
    </main>
  `
}

load(home, 'Home')
