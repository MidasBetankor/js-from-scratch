let utilities = require('./modules/utilities.js')

utilities.log('Hello there!')
utilities.scream(utilities.log, 'general Kenobi')

console.log('push test')
console.log(utilities.push([], 5))

let two = [1, 2, 3, 4, 5]
let threeOrLess = num => num <= 3
console.log(utilities.filter(two, threeOrLess))
