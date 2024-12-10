# Adding Typescript to your Emmy.js + Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /> <img class="inline h-[3rem] mx-[0.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

Sometimes, you might want to add TypeScript to your Vite project to improve the quality of your codebase and catch errors early in the development process.
This guide will show you how to add TypeScript to your Emmy.js + Vite project.
TypeScript is a statically typed superset of JavaScript that adds optional types to your code.

This guide is based on Robin Wieruch's [Vite with TypeScript](https://www.robinwieruch.de/vite-typescript/) article.
          
## Quick Start
1. Install the `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` packages:
```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Add two TypeScript configuration files; one for the browser environment and one for the Node environment:

```bash
touch tsconfig.json tsconfig.node.json
```

3. In the TypeScript file for the browser environment include the following configuration:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

4. Then In the TypeScript file for the Node environment include some more configuration:
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

5. Next, rename all JavaScript files (.js) to TypeScript files (.ts).
```bash	
mv src/main.js src/main.ts
mv src/App.js src/App.ts
```

6. And in your index.html file, reference the new TypeScript file instead of a JavaScript file:
```html
...
  <body>
    <emmy-app></emmy-app>
    <script type='module' src='./app/index.ts'></script>
  </body>
...
```

8. If you are using Tailwind CSS 3 with TypeScript, you need to modify the `tailwind.config.js` file to include the TypeScript file extensions:
```javascript
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{html,js,ts}',
    './*.html',
    './styles/*.css',
    './public/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    
    require('@tailwindcss/typography'),
    
  ]
}
```


<hr>
Might be useful to you. Give it a try! 🚀

- [Quick Start with Emmy.js](/documentation)
- [Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />](/documentation/vite)
