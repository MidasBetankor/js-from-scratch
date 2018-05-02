let utilities = require('./modules/utilities.js')

//utilities.log('Hello there!')
//utilities.scream(utilities.log, 'general Kenobi')

//console.log('push test')
//console.log(utilities.push([], 5))

//let two = [1, 2, 3, 4, 5]
//let threeOrLess = num => num <= 3
//console.log(utilities.filter(two, threeOrLess))

// Must-know ES6 functions
let places = [
  { city: "Gudauri", country: "Georgia", rating: 5 },
  { city: "Kyiv", country: "Ukraine", rating: 7 },
  { city: "Rome", country: "Italy", rating: 10 },
  { city: "Bergamo", country: "Italy", rating: 7 },
  { city: "Milan", country: "Italy", rating: 6 },
  { city: "Verona", country: "Italy", rating: 6 },
  { city: "Riva del Garda", country: "Italy", rating: 10 },
  { city: "Andorra la vella", country: "Andorra", rating: 8 },
  { city: "Canillo", country: "Andorra", rating: 6 },
  { city: "Barcelona", country: "Spain", rating: 10 }
]

console.log('\n')
// join - concatenate elements of array. Pure
console.log("I've traveled to ", places.join(" and "))

console.log('\n')
// filter - select certain elements accroding to provided predicate. Pure
console.log(
  "My Italian experience is:\n", 
  places.filter(place => place.country === "Italy")
  )

console.log('\n')
// map - apply provided delegate to every element of array
let storiesToTell = places
                        .filter(place => place.rating > 6)
			.map(place => place.city === "Bergamo" || place.city === "Kyiv"
			  ? `${place.city} is cool, but theres nothing to do`
			  : `The ${place.city} in ${place.country} is great!`)
console.log("Now listen to me, chaps:", storiesToTell.join(', '))

console.log('\n')
// keys - gets names of parameters from complex objects
console.log(Object.keys(places[0]))

console.log('\n')
// reduce - transform an array into a value. You give a predicate that compares conpeting values and winner's value gets carried over to the next generation. Is useful to map arrays to a single object
// reduceRight is the same stuff, but works from end to beginning
let topPlace = places.reduce((prevLeader, contender) => {
  return contender.rating > prevLeader.rating ? contender : prevLeader
}, places[0])
console.log("The best place i've visited is", topPlace)

let placesGroupedByCountry = places.reduce((map, {city, country, rating}) => {
  map[country] = map[country] === undefined ? [] : map[country]
  map[country] = [...map[country], {city, rating}]
  return map
}, {})

console.log(placesGroupedByCountry)
