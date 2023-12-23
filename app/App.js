import { load, html } from "emmy-dom/dist/server.js";

import "./Home.js";
import "./Docs.js";
import "./Status.js";
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
    <Route href="/status" to="Status"></Route>
    <Router></Router>
  `;
}

export const App = load(app, 'App');
