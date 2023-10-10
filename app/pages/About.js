import { LightComponent, launch } from "../../emmy.js";

class About extends LightComponent {
  constructor() {
    super();
    this.behave('div');
    this.setAttribute('class',
      'flex flex-col justify-center items-center space-y-3 text-center w-full h-full');

    this.render(/*html*/`
      <h1 class="text-3xl font-bold">About</h1>
      <p class="text-xl">
        This is the about page.
      </p>    
    `);
  }
}

launch(About, 'About');