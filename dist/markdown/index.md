# Quick Start with Emmy.js

Emmy.js is a JavaScript library for building user interfaces. Inspired by React.js, it uses the platform's native APIs to render components, in a declarative way.

It's core library `emmy-dom` allows you to create components using functional components, class components, and page components. It also includes hooks and a router to create single page applications.

## Functional Components
You can use functional components to create components without classes. Functional components are just functions that return a string of HTML code or a function that returns a string of HTML code. The following example shows how to create a functional component:
```javascript
import { load, html } from 'emmy-dom'

function helloWorld() {
  return html`<h1>Hello World!</h1>`
}

load(helloWorld, 'HelloWorld')
```

## Page Components
You can use page components to create components that are rendered only once, from a html file. The following example shows how to create a page component:
```html
<!-- home.html -->
<h1>Hello World!</h1>
```

```javascript
import { load } from 'emmy-dom'

load('/home.html', 'Home')
```

## Class Components
You can use class components to create components with classes. The following example shows how to create a class component:

### Light Components
```javascript
import { LightComponent, launch, html } from 'emmy-dom'

class HelloWorld extends LightComponent {
  constructor() {
    super()
    this.render(html`<h1>Hello World!</h1>`)
  }
}

launch(HelloWorld, 'HelloWorld')
```

### Shadow Components
```javascript
import { Component, launch, html } from 'emmy-dom'

class HelloWorld extends Component {
  constructor() {
    super()
    this.render(html`<h1>Hello World!</h1>`)
  }
}

launch(HelloWorld, 'HelloWorld')
```

## Emmy Hooks
Emmy Hooks are inspired by React Hooks. You can use them to add state to your functional components without manually managing the `state` property. 

### useState
```javascript
import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() => {
    el.querySelector('#increment').addEventListener('click', () => {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return () => html`
    <div>
      <h1>Count: ${count()}</h1>
      <button id='increment'>+</button>
    </div>
  `
}

load(counter, 'Counter')
```

### useEffect
```javascript
import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = useState(0)

  el.useEffect(() => {
    el.querySelector('#increment').addEventListener('click', () => {
      setCount(count() + 1)
    })
  }, ['didMount'])

  el.useEffect(() => {
    console.log('Count changed to', count())
  }, [count])

  return () => html`
    <div>
      <h1>Count: ${count()}</h1>
      <button id='increment'>+</button>
    </div>
  `
}

load(counter, 'Counter')
```

## Why Functional Components?
Functional components are easier to write than class components. For example, the following class component:
```javascript
import { LightComponent, launch, html } from 'emmy-dom'

class OldCounter extends LightComponent {
  constructor() {
    super()

    this.setAttribute('counter', 0)
    this.setAttribute('word', 'a')

    this.render(html`
      <div class='flex flex-col justify-center items-center space-y-3 text-center w-full h-full'>
        <h1 class='text-3xl font-bold'>Counter</h1>
        <h3 class='text-3xl font-bold' id='counter'>${this.getAttribute('counter')}</h3>
        <h3 class='text-3xl font-bold' id='word'>${this.getAttribute('word')}</h3>
        <button id='plusButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Increment
        </button>
        <button id='wordButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Word Change
        </button>
      </div>
    `, (component) => {
      component.querySelector('#plusButton').addEventListener('click', () => {
        componentsetAttribute('counter', parseInt(component.getAttribute('counter')) + 1)
      })
      component.querySelector('#wordButton').addEventListener('click', () => {
        component.setAttribute('word', 'a' + component.getAttribute('word'))
      })
    })
  }

  static get observedAttributes() {
    return ['counter', 'word']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'counter') {
      this.$('#counter').innerHTML = newValue
    }
    else if (name === 'word') {
      this.$('#word').innerHTML = newValue
    }
  }
}

launch(OldCounter, 'OldCounter')
```
can be written as the following functional component:
```javascript
import { load, html } from 'emmy-dom'

function counter ({ el }) {
  const [count, setCount] = el.useState(0)
  const [word, setWord] = el.useState('a')

  el.useEffect(() => {
    const handleClick = () => setCount(count() + 1)
    el.querySelector('#plusButton').addEventListener('click', handleClick)

    const handleWord = () => setWord('a' + word())
    el.querySelector('#wordButton').addEventListener('click', handleWord)
  }, ['didMount'])

  return () => html`
    <div class='flex flex-col justify-center items-center space-y-3 text-center w-full h-full'>
      <h1 class='text-3xl font-bold'>Counter</h1>
      <h3 class='text-3xl font-bold'>${count()}</h3>
      <h3 class='text-3xl font-bold'>${word()}</h3>
      <button id='plusButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Increment
      </button>
      <button id='wordButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Word Change
      </button>
    </div>
  `
}

load(counter, 'Counter')
```

## Declarative Props

We have beem using `el` to access the component instance (like `this` in class components). You can also get the props passed to the component using `props` property.

The following example shows how to use props in a functional component:
```javascript
import { load, html } from 'emmy-dom'

function helloWorld({ props }) {
  return html`<h1>Hello ${props().name()}!</h1>`
}

load(helloWorld, 'HelloWorld')
```

### Declarative Children

We can also get the children of the component using `children` property. The following example shows how to use children in a functional component:
```javascript
import { load, html } from 'emmy-dom'

function helloWorld({ children }) {
  return html`
    <div>
      <a href='#'>${children()}</a>
    </div>
  `
}

load(helloWorld, 'HelloWorld')
```

### Setting Props

You can set props using the `el.props` setter. The following example shows how to set props in a functional component:
```javascript
import { load, html } from 'emmy-dom'

function helloWorld({ el, props }) {
  el.props = { name: 'World' }
  return html`<h1>Hello ${props().name()}!</h1>`
}

load(helloWorld, 'HelloWorld')
```
This do not modify the other props passed to the component. It only adds or modifies the props you set.

## Emmy Router
Emmy Router is inspired by React Router. You can use it to create a single page application. The following example shows how to create a single page application with Emmy Router:
```javascript
import { load, Router, Route, html } from 'emmy-dom'

load('/home.html', 'Home')
load('/about.html', 'About')

const app = () => html`
  <div>
    <Route path='/' component='Home' />
    <Route path='/about' component='About' />
    <Router />
  </div>
`

load(app, 'App')
```
You can add `onclick=route(event)` attribute to any anchor tag to navigate to the specified route as a single page application. However, SPA Navigation is <strong>UNESTABLE</strong> and <strong>NOT RECOMMENDED</strong> for production yet.

<hr>
Might be useful to you. Give it a try! 🚀

- [Using Emmy.js with create-emmy](/documentation/cli)
- [Adding Emmy.js to your Ruby on Rails project 
<img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" />](/documentation/rails)
- [Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />](/documentation/vite)
