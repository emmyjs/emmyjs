import { load, html } from "emmy-dom/dist/server.js";

export function pill() {
  let type = this.getAttribute("type");

  const colors = {
    unstable: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300",
    stable: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300",
    deprecated: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300",
    experimental: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300",
    planned: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
  };
  let color = colors[type.trim()];

  this.className = `${color} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`;

  return type.charAt(0).toUpperCase() + type.slice(1);
}

load(pill, "Pill");
