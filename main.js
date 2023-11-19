import { build } from "./src/server.ts";
import { app, App } from "./app/App.js";
import { docs } from "./app/Docs.js";
import { home } from "./app/Home.js";
import { contact } from "./app/Contact.js";
import { counter } from "./app/components/Counter.js";
import { header } from "./app/components/Header.js";
import { underConstruction } from "./app/components/UnderConstruction.js";
import { link } from "./src/router.ts";

build({
  app: App,
  dependencies: /*javascript*/`
    import { load } from './src/index.ts';
    import { html } from './src/utils.ts';
    import { NAVIGATION_EVENT, navigate } from './src/router.ts';
    import Toastify from 'toastify-js';
    import 'toastify-js/src/toastify.css';
  `,
  generators: {
    app, docs, home, contact, counter, header, underConstruction, link 
  },
  template: './template.html'
});
