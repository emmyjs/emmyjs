import { LightComponent, launch } from "emmy-dom";

class App extends LightComponent {
  constructor() {
    super();
    this.behave('div');
    this.setAttribute('class',
      'flex flex-col justify-space-between space-y-3 text-center w-full h-full');

    this.render(/*html*/`
      <nav>
        <a href="/" onclick="route(event)">Home</a>
        <a href="/about" onclick="route(event)">About</a>
      </nav>
      <Router>
        <Route href="/" to="Home"></Route>
        <Route href="/about" to="About"></Route>
        <Route href="/404" to="Code404"></Route>
      </Router> 
    `);
  }
}

launch(App);
