import { load, html } from "emmy-dom/dist/server.js";
import "./components/Pill.js";

export function row() {
  return html`
    <li class="py-3 sm:py-4 justify-between space-x-3 rtl:space-x-reverse flex items-center">
      <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
        ${this.innerHTML}
      </p>
      <Pill type="${this.getAttribute('status')}"></Pill>
    </li>
  `;
}

load(row, 'Row');

export function status() {
  this.className = 'flex flex-col justify-center items-center text-center w-full h-fit mb-[10%]';

  return html`
    <h1 class="text-4xl font-bold">Features Status</h1>
    <ul role="list" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <Row status="stable">Class components</Row>
      <Row status="experimental">Functional Components</Row>
      <Row status="experimental">Emmy Hooks</Row>
      <Row status="unstable">Emmy Router</Row>
      <Row status="unstable">Prerendering</Row>
      <Row status="planned">Server-side rendering</Row>
    </ul>
  `;
}

load(status, 'Status');
