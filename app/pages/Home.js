import { LightComponent, launch } from "emmy-dom";

class Home extends LightComponent {
  constructor() {
    super();
    this.behave('div');
    this.setAttribute('class',
      'flex flex-col justify-center items-center space-y-3 text-center w-full h-full');

    this.render(/*html*/`
      <h1 class="text-3xl font-bold">Hello from Emmy.js!</h1>
      <p class="text-xl">
        Edit <code style="font-family: source-code-pro, Menlo, Monaco, Consolas;">
        app/index.js
        </code> and save to reload.
      </p>
      <a href="https://eanorambuena.github.io/Emmy.js" target="_blank" class="text-blue-600 hover:text-blue-700">
        Learn Emmy.js
      </a>
      <Counter></Counter>
    `);
  }
}

launch(Home);
