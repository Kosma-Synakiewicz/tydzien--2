import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h2>⬇️kliknij zeby cie wzieło do kolejnego zadania⬇️</h2>
    <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>czy te przyciski mają osobne liczniki?</h1>
    <div class="card">
      ${Array.from({ length: 20 }, (_, i) => `<button id="counter-${i + 1}" type="button">Button ${i + 1}</button>`).join('')}
    </div>
    <p class="read-the-docs">
    kliknij w przycisk js zeby cie wzieło do kolejnego zadania
    </p>
  </div>
`;
Array.from({ length: 20 }, (_, i) => {
  const button = document.querySelector(`#counter-${i + 1}`);
  let count = 0;
  button.addEventListener('click', () => {
    count++;
    button.textContent = `Button ${i + 1} - Count: ${count}`;
  });
});
