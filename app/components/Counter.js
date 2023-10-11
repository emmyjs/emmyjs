import { load, useState } from "../../emmy.js";

const Counter = (THIS) => {
  THIS.behave('section');
  THIS.setAttribute('class', 'flex flex-col justify-center items-center space-y-3');
  const [counter, setCounter] = useState(0);

  THIS.callback = () => {
    THIS.$('#plusButton').$EventListener('click', () => setCounter(counter() + 1));

    THIS.$('#minusButton').$EventListener('click', () => setCounter(counter() - 1));
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
