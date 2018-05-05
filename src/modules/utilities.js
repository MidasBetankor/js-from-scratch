const print = message => console.log(message)

const capitalize = (log, message) => log(message.toUpperCase())

const push = (array, element) => [...array, element]

const filter = (data, predicate) => {
  let result = []
  for (let i = data.length - 1; i >= 0; i--) {
    if (predicate(data[i]) === true) {
      result = push(result, data[i])
    }
  }
  return result
}


const chain = (...fns) => 
	(num) => fns.reduce(
		(num, f) => f(num),
		num
		)

module.exports = {
  log: print,
  scream: capitalize,
  push: push,
  filter: filter,
  chain: chain
}
