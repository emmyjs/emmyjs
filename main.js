import { build } from 'emmy-dom/dist/server.js';
import { app, App } from './app/App.js';
import { docs } from './app/Docs.js';
import { home } from './app/Home.js';
import { status } from './app/Status.js';
import { counter } from './app/components/Counter.js';
import { header } from './app/components/Header.js';
import { pill } from './app/components/Pill.js';
import { row } from './app/components/Row.js';
import { underConstruction } from './app/components/UnderConstruction.js';

build({
  app: App,
  dependencies: /*javascript*/`
    import { load, html, Router, Route } from 'emmy-dom';
    import Toastify from 'toastify-js';
    import 'toastify-js/src/toastify.css';
  `,
  generators: {
    app, docs, home, row, status, counter, header, pill,
    underConstruction
  },
  template: './template.html'
});
