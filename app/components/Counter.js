import { load } from "emmy-dom/dist/server.js";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export function counter () {
  this.behave('section');
  this.className = 'flex flex-col justify-center items-center space-y-3';
  const [counter, setCounter] = this.useState(0);

  this.useEffect(() => {
    this.querySelector('#plusButton').addEventListener('click', () => setCounter(counter() + 1));
    this.querySelector('#minusButton').addEventListener('click', () => setCounter(counter() - 1));
  }, ['didMount']);

  this.useEffect(() => {
    Toastify({
      text: `Counter value changed to ${counter()}`,
      style: {
        background: "#1F2937",
        color: "#fff",
        borderRadius: "10px",
      },
      gravity: "bottom",
      duration: 600
    }).showToast();
  }, [counter]);

  return () => /*html*/`
    <h2 class='text-2xl font-bold'>Counter</h2>
    <p id="counter">${ counter() }</p>
    <div class='flex flex-row justify-center items-center space-x-2'>
      <button id='plusButton' class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        +
      </button>
      <button id='minusButton' class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        -
      </button>
    </div>
  `;
}

load(counter, 'Counter');
