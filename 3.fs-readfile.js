const fs = require('node:fs')

// Este script lee dos archivos de texto de forma síncrona y muestra su contenido en la consola.
console.log('Leyendo el archivo n° 1 ...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)

console.log('Hacer cosas mientras lee el archivo n° 1 ...') // No lo puede hacer porque es síncrono

console.log('Leyendo el archivo n° 2 ...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secondText)