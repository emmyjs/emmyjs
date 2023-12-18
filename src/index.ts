import { type DependencyArray, type RouteString, type StyleObject,
  html, createInlineStyle, processGenerator,
  vanillaElement, getValues, useState } from './utils.ts';

export type HTMLGenerator = ((component: EmmyComponent) => string) | ((component?: EmmyComponent) => string) | (() => string);
export type HTMLGeneratorGenerator = ((component: EmmyComponent) => HTMLGenerator) | ((component?: EmmyComponent) => HTMLGenerator) | (() => HTMLGenerator);
export type Callback = ((component: EmmyComponent) => void) | ((component?: EmmyComponent) => void) | (() => void);
declare global {
  interface Window {
    route: (event: Event) => void;
  }
}
export type ClassComponent = Component | LightComponent;
export type ComponentType = ClassComponent | FunctionalComponent | HTMLGenerator | RouteString;


abstract class EmmyComponent extends HTMLElement {
  contentGenerator: HTMLGenerator;
  callback: Callback;
  Style: StyleObject;

  constructor() {
    super();
    this.contentGenerator = () => '';
    this.callback = (component: EmmyComponent) => {};
    this.Style = {};
  }

  addStyle(style: StyleObject) {
    for (const [element, elementStyle] of Object.entries(style)) {
      this.Style[element] = createInlineStyle(elementStyle);
      if (element == 'this') {
        this.setAttribute('style', this.Style[element]);
      }
    }
}

  behave(element: string) {
    this.setAttribute('is', element);
  }

  abstract connectedCallback(): void;

  render(generator: string | HTMLGenerator, callback?: Callback) {
    if (typeof generator !== 'function') {
      this.contentGenerator = () => generator;
    }
    else {
      this.contentGenerator = generator;
    }
    if (callback && typeof callback === 'function') {
      this.callback = callback;
    }
  }

  abstract querySelector(selector: string): HTMLElement | null;
}


export class Component extends EmmyComponent {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = processGenerator(this.contentGenerator(this));
    this.callback.call(this, this);
  }

  querySelector(selector: string): HTMLElement | null {
    return this.shadowRoot!.querySelector(vanillaElement(selector));
  }
}


export class LightComponent extends EmmyComponent {
  connectedCallback() {
    this.innerHTML = processGenerator(this.contentGenerator(this));
    this.callback.call(this, this);
  }

  querySelector(selector: string): HTMLElement | null {
    return HTMLElement.prototype.querySelector.call(this, vanillaElement(selector));
  }
}

export function useEffect(callback: Callback, dependencies: DependencyArray) {
  const oldEffectCallback = this.effectCallback;
  if (!dependencies || dependencies.length === 0) {
    this.effectCallback = (component) => {
      oldEffectCallback(component);
      callback.call(component, component);
    }
    return;
  }
  let oldDependencies = getValues(dependencies);
  this.effectCallback = (component) => {
    oldEffectCallback(component);
    const newDependencies = getValues(dependencies);
    if (JSON.stringify(oldDependencies) !== JSON.stringify(newDependencies)) {
      oldDependencies = newDependencies;
      callback.call(component, component);
    }
  }
  dependencies.find((dependency) => {
    if (typeof dependency === 'string') {
      if (dependency === 'didMount') {
        const oldCallback = this.callback;
        this.callback = (component) => {
          oldCallback.call(component, component);
          callback.call(component, component);
        };
      }
    }
    return false;
  });
}

function bindHooks(component: FunctionalComponent) {
  component.useState = useState.bind(component);
  component.useEffect = useEffect.bind(component);
}


export class FunctionalComponent extends LightComponent {
  effectCallback: (component: FunctionalComponent) => void;
  useState: (initialValue: any) => [() => any, (newValue: any) => void];
  useEffect: (callback: Callback, dependencies: DependencyArray) => void;

  constructor(func: HTMLGenerator) {
    super();
    this.effectCallback = (component: FunctionalComponent) => {};
    bindHooks.call(this, this);
    this.setState({ rerenderCount: 0 });
    const renderFunctionOrString = func.call(this, this);
    this.render(renderFunctionOrString);
  }

  connectedCallback() {
    super.connectedCallback();
    this.effectCallback(this);
  }

  static get observedAttributes() {
    return ['state'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'state') {
      this.connectedCallback();
    }
  }

  patchState(newState: object) {
    const currentState = this.state();
    const updatedState = Object.assign(currentState, newState);
    this.setState(updatedState);
  }

  rerender() {
    this.patchState({ rerenderCount: this.state().rerenderCount + 1 });
  }

  state() {
    return JSON.parse(this.getAttribute('state')!.replace(/'/g, '"') || '');
  }

  setState(newState: object) {
    this.setAttribute('state', JSON.stringify(newState).replace(/"/g, "'"));
  }

  querySelector(selector: string): HTMLElement | null {
    let element = HTMLElement.prototype.querySelector.call(this, vanillaElement(selector));
    element.__proto__.addEventListener = (event, callback) => {
      const newCallback = (event) => {
        callback(event);
        this.rerender();
      }
      HTMLElement.prototype.addEventListener.call(element, event, newCallback);
    }
    return element;
  }
}


export class Route extends LightComponent {
  static routes: { [key: RouteString]: string } = {};

  constructor() {
    super();

    this.render(``, () => {
      let to = this.getAttribute('to') || '';
      const componentName = "emmy-" + to.toLowerCase();
      const path = (this.getAttribute('href') === '/') ? '/root' : this.getAttribute('href') || '/404';
      Route.routes[path] = `<${componentName}></${componentName}>`;
    });
  }
}


export class Router extends LightComponent {
  handleLocation: () => void;

  constructor() {
    super();
    this.behave('div');
    this.className = 'flex flex-col justify-center items-center space-y-3 text-center w-full h-full box-border';

    this.handleLocation = () => {
      const path = window.location.pathname;
      const htmlText = (path === '/' ? Route.routes['/root'] : Route.routes[path])
        || Route.routes['/404'] || html`<h1>404</h1>`;
      if (this.innerHTML !== htmlText) this.innerHTML = htmlText;
    }

    window.route = (event) => {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement;
      if (window.location.pathname === target.href!) return;
      window.history.pushState({}, '', target.href!);
      this.handleLocation();
    }

    window.onpopstate = this.handleLocation;

    this.render(``, () => this.handleLocation());
  }
}

export function launch(component: ClassComponent | FunctionalComponent, name: string) {
  if (customElements.get(vanillaElement(name))) {
    console.warn(`Custom element ${vanillaElement(name)} already defined`);
    return component;
  }
  customElements.define(vanillaElement(name), component as unknown as CustomElementConstructor);
  return component;
}

function createPageComponent(url: string, name: string): ClassComponent | FunctionalComponent {
  let component;
  async () => {
    const result = await fetch(url);
    const htmlText = await result.text();
    component = load(() => htmlText, name);
  }
  return component;
}

export function load(func: ComponentType, name: string): ClassComponent | FunctionalComponent {
  if (typeof func === 'string') {
    return createPageComponent(func, name);
  }
  try {
    const instance = new (func as any)() as any;
    if (instance instanceof Component || instance instanceof LightComponent || instance instanceof FunctionalComponent) {
      return launch(func as ClassComponent, name);
    }
    throw new Error('Not a valid component');
  }
  catch (e) {
    class X extends FunctionalComponent {
      constructor() {
        super(func as HTMLGenerator);
      }
    }
    return launch(X as unknown as FunctionalComponent, name);
  }
}

launch(Route as unknown as ClassComponent, 'Route');
launch(Router as unknown as ClassComponent, 'Router');
