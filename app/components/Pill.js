import { load, html } from 'emmy-dom/dist/server.js';

export function pill() {
  let type = this.getAttribute('type');

  const colors = {
    unstable: 'text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-yellow-900 text-yellow-300',
    stable: 'text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-green-900 text-green-300',
    deprecated: 'text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-900 text-red-300',
    experimental: 'text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-300',
    planned: 'text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-300'
  };
  let color = colors[type.trim()];

  this.className = `${color} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`;

  return type.charAt(0).toUpperCase() + type.slice(1);
}

load(pill, 'Pill');
