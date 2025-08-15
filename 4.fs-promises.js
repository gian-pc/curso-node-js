// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

/**
 * En vez de utilizar Callbacks ahora se utiliza Promesas
 * Todo: El resultado será el igual
 */

const fs = require('node:fs/promises')

console.log('Leyendo el archivo n° 1 ...') // --> 1
fs.readFile('./archivo.txt', 'utf-8') // --> 5
  .then(text =>{
    console.log('primer texto:', text)
  })

console.log('Hacer cosas mientras lee el archivo n° 1 ...') // --> 2

console.log('Leyendo el archivo n° 2 ...') // --> 3
fs.readFile('./archivo2.txt', 'utf-8')  // --> 4
  .then(text =>{
    console.log('segundo texto:', text)
  })

/**
 * todo: Leyendo el archivo n° 1 ...
 * 
 * Hacer cosas mientras lee el archivo n° 1 ...
 * 
 * Leyendo el archivo n° 2 ...
 * gian
 * carlos
 * paucar
 * cortez
 * 
 * todo: Hola mundo
 */