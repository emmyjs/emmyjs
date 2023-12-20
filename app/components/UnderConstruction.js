import { load } from "emmy-dom/dist/server.js";

export function underConstruction () {
    this.className = 'absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center w-full h-full';
    this.behave('div');
    return /*html*/`<div class="text-white text-3xl font-bold mb-4">Under construction 🚧</div>`;
}

load(underConstruction, 'UnderConstruction');
