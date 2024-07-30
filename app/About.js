import { load, html } from 'emmy-dom/server'

export function about ({ el }) {
  el.className = 'flex flex-col justify-between items-center text-center w-full gap-6'

  return html`
    <main class='flex flex-col justify-center items-center gap-8 max-w-[80%] lg:max-w-full'>
      <h1 class='text-3xl md:text-5xl drop-shadow-lg font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Our Story</h1>
      <section class='flex flex-col justify-center items-center gap-6 lg:max-w-[70%]'>
        <h2 class='text-2xl drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>The Beginning</h2>
        <article class='flex flex-col md:flex-row justify-center items-center gap-6'>
          <figure class='w-full flex-col justify-left items-center gap-2 hidden md:flex'>
            <img src='./first-emmyjs.png' alt='First Emmy.js landing page' class='rounded-lg shadow-lg'>
            <figcaption>First Emmy.js landing page</figcaption>
          </figure>
          <div class='flex flex-col items-start gap-2'>
            <p class='text-xl text-left'>
              Emmy.js began as a personal project to create <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>web components</strong> that are <strong class='drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>easy to use and understand</strong>.
            </p>
            <p class='text-xl text-left'>
              Inspired by the <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>simplicity of React</strong> and the power of the platform, Emmy.js was born. As a simple javascript file, emmy-dom started as a way to create web components without the need of complex classes.
            </p>
            <p class='text-xl text-left'>
              The <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>functional approach</strong> to web components was a hit, and the project grew to be a npm package and a growing community.
          </div>
          <figure class='w-full flex flex-col justify-left items-center gap-2 md:hidden'>
            <img src='./first-emmyjs.png' alt='First Emmy.js landing page' class='rounded-lg shadow-lg'>
            <figcaption>First Emmy.js landing page</figcaption>
          </figure>
        </article>
      </section>
      <section class='flex flex-col justify-center items-center gap-6 lg:max-w-[70%]'>
        <h2 class='text-2xl drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>The Team</h2>
        <article class='flex flex-col md:flex-row justify-center items-center gap-6'>
          <div class='flex flex-col items-start gap-2'>
            <p class='text-xl text-left'>
              Emmy.js is a project by <a href='https://www.linkedin.com/in/eanorambuena/' target='_blank' rel='noopener noreferrer'>Emmanuel Norambuena</a>, a <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>software engineer</strong> with a passion for creating simple tools.
            </p>
            <p class='text-xl text-left'>
              Lover of <strong class='drop-shadow-lg font-semibold text-blue-600 dark:text-blue-300'>open source</strong>, <strong class='drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>sustainability</strong> and <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>community building</strong>, Emmanuel is always looking for ways to make communities better.
            </p>
            <p class='text-xl text-left'>
              Emmanuel is also the General Manager of <a href='https://osuc.dev' target='_blank' rel='noopener noreferrer'><strong class='drop-shadow-lg font-semibold text-blue-600 dark:text-blue-300'>Open Source eUC</strong></a>, a student community that creates and maintains open source projects for the community.
            </p>
          </div>
          <img src='./eanorambuena.webp' alt='Emmanuel Norambuena' class='w-1/4 rounded-full shadow-lg'>
        </article>
      </section>
    </main>
  `
}

load(about, 'About')
