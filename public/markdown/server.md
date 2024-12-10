# Adding Server-Side Rendering (SSR) to your Emmy.js project

Did you know that you can add Server-Side Rendering (SSR) to your Emmy.js project? 🤯
It is based on the Pre-Rendering engine of [Skate.js](https://github.com/skatejs/skatejs/tree/master/packages/ssr) 🪦

## Quick Start

1. Rename your `index.html` file to `template.html`:

```bash
mv index.html template.html
```

2. And in your index.html file, replace the `emmy-app` tag with `{content}`:

```html
...
  <body>
    {content}
    <script type='module' src='./app/index.js'></script>
  </body>
...
```

3. Replace the import of `Emmy` in your components file with the following code:

```js
import { ... } from 'emmy-dom/server'
```

4. Create a new file called `main.js` in the root of your project:

```bash
touch main.js
```

5. Add the following code to `main.js`:

```js
import { build, javascript, Emmy } from 'emmy-dom/server'
import { app, App } from './app/index.js'

build({
  app: App,
  dependencies: javascript`
    import { load, html, jsx, Router, Route, Emmy, loadGlobalEmmy as lge } from 'emmy-dom'
    lge(${JSON.stringify(Emmy)})
  `,
  generators: {
    app
  },
  template: './template.html'
})
```

6. Modify your `package.json` file to include the `main.js` int the scripts:

```json
{
  ...
  "scripts": {
    "dev": "concurrently --raw 'npm run watch' 'vite'",
    "build": "npm run ssr && vite build",
    "preview": "vite preview",
    "watch": "watch 'npm run ssr' ./app",
    "ssr": "bun main.js"
  }
  ...
}
```

7. Install the `bun` package globally. If you haven't already installed it, run the following command:

```bash
npm install -g bun
```

8. Install the `concurrently` package as a dev dependency:

```bash
npm install concurrently -D
```

<hr>
Might be useful to you. Give it a try! 🚀

- [Quick Start with Emmy.js](/documentation)
- [Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />](/documentation/vite)
