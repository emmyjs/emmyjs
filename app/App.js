import { load } from "../emmy.js";

import "./Home.js";
import "./components/Header.js";
load('/About.html', 'About');
load('/Contact.html', 'Contact');
load('/Code404.html', 'Code404');

function App () {
  this.behave('div');
  this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full h-full text-white';

  return /*html*/`
    <Header></Header>
    <Route href="/" to="Home"></Route>
    <Route href="/about" to="About"></Route>
    <Route href="/404" to="Code404"></Route>
    <Route href="/contact" to="Contact"></Route>
    <Router></Router> 
  `;
}

load(App, 'App');
