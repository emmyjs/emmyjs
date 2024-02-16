import { load, html } from 'emmy-dom/dist/server'
import MiniSearch from 'minisearch'

const Emmy = {}

export function search ({ el }) {
  const [modal, setModal] = el.useState(false)
  const [results, setResults] = el.useState([])

  el.useEffect(() => {
    let miniSearch = new MiniSearch({
      fields: ['id', 'title', 'content', 'url'], // fields to index for full-text search
      storeFields: ['title', 'content', 'url'] // fields to return with search results
    })
    const documents = Object.entries(Emmy.markdown ?? {}).map(([key, value]) => {
      return {
        id: key,
        title: value.match(/<h1(.*?)>(.*?)<\/h1>/).slice(2).join(''),
        url: (key === 'index') ? '/documentation' : `/documentation/${key}`,
        content: value
      }
    })
    
    miniSearch.addAll(documents) // Index all documents

    el.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      const search = e.target.querySelector('input').value
      if (!search) return
      setResults(miniSearch.search(search))
      if (results().length === 0) setResults(documents)
      setModal(true)
    })

    el.querySelector('#close-modal').addEventListener('click', () => setModal(false))
  }, ['didMount'])

  return () => html`
    <form class='hidden lg:block'>
      <label for='search' class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>Search</label>
      <fieldset class='flex flex-row rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 focus:border-blue-500 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <input type='search' id='search' placeholder='Search documentation...' required class='block px-4 ps-10 text-sm border-none rounded-lg text-gray-900 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:ring-none focus:outline-none focus:border-none' />
        <button type='submit' class='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4'>
          <svg class='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' fill='none' viewBox='0 0 20 20'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'/>
          </svg>
        </button>
      </fieldset>
    </form>
    <!-- Main modal -->
    <div id='select-modal' tabindex='-1' aria-hidden='${!modal()}' class='${modal() ? '' : 'hidden' } overflow-y-auto overflow-x-hidden fixed absolute top-50 left-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
      <section class='p-4 w-full max-w-md max-h-full'>
        <article class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div class='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
              Search results
            </h3>
            <button type='button' class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' data-modal-toggle='select-modal' id='close-modal'>
              <svg class='w-3 h-3' aria-hidden='true' fill='none' viewBox='0 0 14 14'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'/>
              </svg>
              <span class='sr-only'>Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class='p-4 md:p-5'>
            <p class='text-gray-500 dark:text-gray-400 mb-4'>${results().length} ${results().length === 1 ? 'result' : 'results'} found</p>
            <ul class='space-y-4 mb-4'>
              ${results().map(result => html`
                <li>
                  <a href='${result.url}' class='inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'>                        
                    <div class='block'>
                      <div class='w-full text-lg font-semibold'>${result.title}</div>
                    </div>
                    <svg class='w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
                      <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
                    </svg>
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
        </article>
      </section>
    </div>
  `
}

load(search, 'Search')
