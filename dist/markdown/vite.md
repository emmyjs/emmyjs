# Adding Emmy.js to your Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
          
## Quick Start
1. Install the `emmy-dom` npm package:
```bash
npm i emmy-dom
```

2. If you are using a base path in your Vite project, you will need to add the following to your `vite.config.js` file:
```javascript
export default {
  base: '/your-base-path/'
}
```
This way, apps hosted in url paths like `https://example.com/your-base-path/` will work properly. If you are not using a base path, you can skip this step.

3. Create a new file called `counter.js` and add the following code:
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

4. Add the following code to your `index.html` file:
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

5. Run your Vite project:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`. You should see a counter that increments when you click the `+` button.

That's it! You've successfully added Emmy.js to your Vite project. 🚀

## Hosting on GitHub Pages
If you are hosting your Vite project on GitHub Pages, SPA routing might not work properly. No worries! You can mitigate this by adding the following code to your `vite.config.js` file:
```javascript	
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // your entry file
        about: resolve(__dirname, 'index.html'), // other pages like about, contact, etc.
        contact: resolve(__dirname, 'index.html')
        ...
      }
    }
  }
})
```
This will ensure that all your pages are served the same `index.html` file. Nevertheless, when the javascript is not loaded, the GitHub Pages server will return a 404 error.

We encourage you to use other hosting services which are more SPA-friendly.

<hr>
Might be useful to you. Give it a try! 🚀

- [Quick Start with Emmy.js](/documentation)
- [Using Emmy.js with create-emmy](/documentation/cli)
