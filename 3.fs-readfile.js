const fs = require('node:fs')

// Este script lee dos archivos de texto de forma síncrona y muestra su contenido en la consola.
console.log('Leyendo el archivo n° 1 ...') // --> 1
const text = fs.readFileSync('./archivo.txt', 'utf-8') // --> 2

console.log(text)

console.log('Hacer cosas mientras lee el archivo n° 1 ...') // No lo puede hacer porque es síncrono --> 3

console.log('Leyendo el archivo n° 2 ...') // --> 4
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8') // --> 5

console.log(secondText)

/**
 * -------- Salida --------
 * Leyendo el archivo n° 1 ...
 * Hola mundo
 * Hacer cosas mientras lee el archivo n° 1 ...
 * Leyendo el archivo n° 2 ...
 * gian
 * carlos
 * paucar
 * cortez
 */