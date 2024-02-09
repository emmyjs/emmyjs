# Adding Emmy.js to your Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
          
## Quick Start
1. Install the `emmy-dom` npm package:
```bash
npm i emmy-dom
```

2. Create a new file called `counter.js` and add the following code:
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

3. Add the following code to your `index.html` file:
```html
...
  <body>
    ...
    <emmy-counter></emmy-counter>
    ...
    <script type='module' src='./counter.js'></script>
  </body>
...
```

4. Run your Vite project:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`. You should see a counter that increments when you click the `+` button.

That's it! You've successfully added Emmy.js to your Vite project. 🚀

<hr>
Might be useful to you. Give it a try! 🚀

- [Quick Start with Emmy.js](/documentation)
