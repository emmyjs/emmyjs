import { load } from "../emmy.js";

import "./Home.js";
load('/About.html', 'About');
load('/Contact.html', 'Contact');
load('/Code404.html', 'Code404');

function App () {
    this.behave('div');
    this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full h-full text-white';

  return /*html*/`
    <nav>
      <a href="/" onclick="route(event)">Home</a>
      <a href="/about" onclick="route(event)">About</a>
      <a href="/contact" onclick="route(event)">Contact</a>
    </nav>
    <Route href="/" to="Home"></Route>
    <Route href="/about" to="About"></Route>
    <Route href="/404" to="Code404"></Route>
    <Route href="/contact" to="Contact"></Route>
    <Router></Router> 
  `;
}

load(App, 'App');
