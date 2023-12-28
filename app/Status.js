import { load, html } from "emmy-dom/dist/server.js";
import "./components/Row.js";

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
      <Row status="planned">Declarative props</Row>
      <Row status="planned">Auto-close tags</Row>
    </ul>
  `;
}

load(status, 'Status');
