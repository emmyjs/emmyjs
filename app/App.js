import { load } from "../src/server.ts";
import { html } from "../src/utils.ts";
import { NAVIGATION_EVENT } from "../src/router.ts";

import "./Home.js";
import "./Docs.js";
import "./Contact.js";
import "./components/Header.js";
load('/Code404.html', 'Code404');

export function app () {
  this.behave('div');
  this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full h-full text-white box-border';

  return html`
    <Header></Header>
    <Route href="/" to="Home"></Route>
    <Route href="/docs" to="Docs"></Route>
    <Route href="/404" to="Code404"></Route>
    <Route href="/contact" to="Contact"></Route>
    <Router></Router> 
  `;
}

export const App = load(app, 'App');
