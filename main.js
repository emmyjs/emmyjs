import { build } from "./src/server.ts";
import { app, App } from "./app/App.js";
import { docs } from "./app/Docs.js";
import { home } from "./app/Home.js";
import { contact } from "./app/Contact.js";
import { counter } from "./app/components/Counter.js";
import { header } from "./app/components/Header.js";
import { underConstruction } from "./app/components/UnderConstruction.js";

build({
  app: App,
  dependencies: /*javascript*/`
    import { load, Route, Router } from './src/index.ts';
    import Toastify from 'toastify-js';
    import 'toastify-js/src/toastify.css';
  `,
  generators: {
    app, docs, home, contact, counter, header, underConstruction 
  },
  template: './template.html'
});
