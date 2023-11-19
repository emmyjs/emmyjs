import { html } from './utils.ts';

export const NAVIGATION_EVENT = 'navigation';

export function navigate(href: string) {
  console.log('navigate', href);
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

export function link() {
  this.behave('a');
  const to = this.getAttribute('to') || '/';
  this.setAttribute('href', to);

  this.useEffect(() => {
    const handleClick = (event: Event) => {
      event.preventDefault();
      window.route(event);
    };
    this.addEventListener('click', handleClick);
    return () => this.removeEventListener('click', handleClick);
  }, ['didMount']);

  return (component) => component.innerHTML;
}
