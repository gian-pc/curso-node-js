const fs = require('node:fs')

/**------------ Asíncrono -------------
 * Todo: readFile
 * Forma asíncrona de leer archivos
 * 
 * Ahora al ser asíncrono van a necesitar un mecanismo que una vez
 * leído el archivo vaya a ejecutar el código
 * Todo: Callbacks
 * Son funciones que se ejecutan cuando una tarea ha terminado
 */
console.log('Leyendo el archivo n° 1 ...') // --> 1
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // --> 5
  /**
   * Esta diciendo oye mira quiero que me leas este archivo
   * que lo codifiques en utf-8
   * y que cuando termines sigas ejecutando el código del callback(console.log)
   * todo: pero mientras tanto sigue ejecutando la siguiente línea de código
   */
  console.log(text)
})

console.log('Hacer cosas mientras lee el archivo n° 1 ...') // --> 2

console.log('Leyendo el archivo n° 2 ...') // --> 3
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => { // --> 4
  console.log(text)
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