import { LightComponent, launch } from "emmy-dom";

class Counter extends LightComponent {
  constructor() {
    super();
    this.setAttribute('counter', 0);
    this.behave('section');
    this.setAttribute('class', 'flex flex-col justify-center items-center space-y-3');

    this.render(`
      <h2 class='text-2xl font-bold'>Counter</h2>
      <p id="counter">${ this.getAttribute('counter') }</p>
      <div class='flex flex-row justify-center items-center space-x-2'>
        <button id='plusButton' class='bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 border rounded-full'>
          +
        </button>
        <button id='minusButton' class='bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 border rounded-full'>
          -
        </button>
      </div>
    `, (_) => {
      _.$('#plusButton').onclick = () => {
        _.setAttribute('counter', parseInt(_.getAttribute('counter')) + 1);
      };
      _.$('#minusButton').onclick = () => {
        _.setAttribute('counter', parseInt(_.getAttribute('counter')) - 1);
      };
    });
  }

  static get observedAttributes() {
    return ['counter'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'counter') {
      this.$('#counter').innerHTML = newValue;
    }
  }
}

launch(Counter);
