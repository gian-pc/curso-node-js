const fs = require('node:fs') // a partir de Node 16, se recomienda poner node:fs

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un ficher0
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size // tamaño en bytes
)