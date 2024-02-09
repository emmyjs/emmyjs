# Adding Emmy.js to your Ruby on Rails project <img class="inline h-[5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" />
          
          
## Quick Start
1. Install the `emmy-dom` npm package:
```bash
npm i emmy-dom
```
2. Use importmap to import the `emmy-dom` package:
```bash
./bin/importmap pin emmy-dom --download
```
3. Create a new file called `counter.js` in the public/javascripts directory and add the following code:
```javascript
import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() => {
    el.querySelector('#increment').addEventListener('click', () => {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return html`
    <h1>Counter</h1>
    <p>Count: ${count()}</p>
    <button id='increment'>+</button>
  `
}

load(counter, 'Counter')
```
<p>
  <strong>Note:</strong> This tutorial is under construction. Please check back later.
</p>

That's it! You've successfully added Emmy.js to your Ruby on Rails project. 🚀

<hr>
Might be useful to you. Give it a try! 🚀

- [Quick Start with Emmy.js](/documentation)
