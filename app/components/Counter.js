import { load, useState, useEffect } from "../../emmy.js";

function Counter () {
  this.behave('section');
  this.className = 'flex flex-col justify-center items-center space-y-3';
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Counter value changed to', counter());
  }, [counter]);

  this.callback = () => {
    this.querySelector('#plusButton').addEventListener('click', () => setCounter(counter() + 1));
    this.querySelector('#minusButton').addEventListener('click', () => setCounter(counter() - 1));
  }

  return () => /*html*/`
    <h2 class='text-2xl font-bold'>Counter</h2>
    <p id="counter">${ counter() }</p>
    <div class='flex flex-row justify-center items-center space-x-2'>
      <button id='plusButton' class='bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 border rounded-full'>
        +
      </button>
      <button id='minusButton' class='bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 border rounded-full'>
        -
      </button>
    </div>
  `;
}

load(Counter, 'Counter');
