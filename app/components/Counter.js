import { load, html } from 'emmy-dom/dist/server'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export function counter ({ el }) {
  el.className = 'flex flex-col justify-center items-center space-y-3'
  const [counter, setCounter] = el.useState(0)

  el.useEffect(() => {
    el.querySelector('#plusButton').addEventListener('click', () => setCounter(counter() + 1))
    el.querySelector('#minusButton').addEventListener('click', () => setCounter(counter() - 1))
  }, ['didMount'])

  el.useEffect(() => {
    Toastify({
      text: `Counter value changed to ${counter()}`,
      style: {
        background: '#1F2937',
        color: '#fff',
        borderRadius: '10px',
      },
      gravity: 'bottom',
      duration: 600
    }).showToast()
  }, [counter])

  return () => html`
    <h2 class='text-2xl font-bold'>Counter</h2>
    <p id='counter'>${ counter() }</p>
    <div class='flex flex-row justify-center items-center space-x-2'>
      <button id='plusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        +
      </button>
      <button id='minusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        -
      </button>
    </div>
  `
}

load(counter, 'Counter')
