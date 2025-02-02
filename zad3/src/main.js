import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <header class="banner">
    <h1>ciekawa nazwa na storne</h1>
  </header>

  <div class="main-container">
    <aside class="lewy">
      <p>lewy</p>
    </aside>
    <main class="content">
      <p>to ten środek contentu?</p>
    </main>
    <aside class="prawy">
      <p>prawy</p>
    </aside>
  </div>

  <footer class="footer">
    <p>ciekawa stopka</p>
  </footer>
`

setupCounter(document.querySelector('#counter'))
