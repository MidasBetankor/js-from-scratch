let utilities = require('../utilities.js')
const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clearScreen = () => console.clear()

const toObject = time => ({
	seconds: time.getSeconds(),
	minutes: time.getMinutes(),
	hours: time.getHours(),
	ampm: 'AM'
})

const ampm = time => (
	Object.assign(time, { ampm: (time.hours < 12) ? "AM" : "PM" })
)

const civilianHours = time => (
	Object.assign(time, { hours: (time.hours > 12) ? (time.hours - 12) : time.hours }
))

const appendZeroes = time => (
	Object.assign(time, {
		seconds: (time.seconds < 10) ? ('0' + time.seconds) : time.seconds,
		minutes: (time.minutes < 10) ? ('0' + time.minutes) : time.minutes,
		hours: (time.hours < 10) ? ('0' + time.hours) : time.hours
	}))

const formatTime = time =>
	"hh:mm:ss dd"
		.replace("hh", time.hours)
		.replace("mm", time.minutes)
		.replace("ss", time.seconds)
		.replace("dd", time.ampm)

const showTime = () => {
	utilities.chain(
		clearScreen,
		getCurrentTime,
		toObject,
		ampm,
		appendZeroes,
		formatTime,
		console.log
	)(getCurrentTime())
}

module.exports = {
	showTime: showTime,
	oneSecond: oneSecond
}

// Gordon Hannington
