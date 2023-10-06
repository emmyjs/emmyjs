import { LightComponent, launch } from "../../emmy.js";

class Code404 extends LightComponent {
  constructor() {
    super();
    this.behave('div');
    this.setAttribute('class',
      'flex flex-col justify-center items-center space-y-3 text-center w-full h-full');

    this.render(/*html*/`
      <h1 class="text-3xl font-bold">404</h1>
      <img src="https://http.cat/images/404.jpg" alt="404">
    `);
  }
}

launch(Code404);