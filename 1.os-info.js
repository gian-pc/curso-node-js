
/**
 * os es un módulo nativo de Node.js que te permite obtener información 
 * del sistema operativo en el que se está ejecutando tu aplicación.
 */
const os = require('node:os')

console.log('Información del Sistema Operativo')
console.log('------------------------------')

console.log('Sistema operativo: ',os.platform())
console.log('Versión SO: ',os.release())
console.log('Arquitectura: ',os.arch())
console.log('CPUs', os.cpus())
console.log('uptime', os.uptime()/60/60)