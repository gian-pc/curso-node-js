// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para utillizar CommonJS

import { sum, sub, mult } from './sum.mjs'
console.log(sum(1, 5))
console.log(sub(8, 4))
console.log(mult(5, 6))