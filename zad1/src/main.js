import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>galeria</title>
</head>
<body>
        <div class="galeria">
        <img src="zdjecie1.jpg" alt="Zdjęcie 1">
        <img src="zdjecie2.jpg" alt="Zdjęcie 2">
        <img src="zdjecie3.jpg" alt="Zdjęcie 3">
        <img src="zdjecie4.jpg" alt="Zdjęcie 4">
        <img src="zdjecie5.jpg" alt="Zdjęcie 5">
        <img src="zdjecie6.jpg" alt="Zdjęcie 6">
        <img src="zdjecie7.jpg" alt="Zdjęcie 7">
        <img src="zdjecie8.jpg" alt="Zdjęcie 8">
        <img src="zdjecie9.jpg" alt="Zdjęcie 9">
        <img src="zdjecie10.jpg" alt="Zdjęcie 10">
    </div>
</body>
</html>
`

setupCounter(document.querySelector('#counter'))
