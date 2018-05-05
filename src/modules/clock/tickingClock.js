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

const formatTime = time => {
	let formattedTime = Object.assign(time)
	formattedTime.ampm =
		(formattedTime.hours < 12)
		? "AM"
		: "PM"
	formattedTime.seconds = 
		(formattedTime.seconds < 10)
		? '0' + formattedTime.seconds
		: formattedTime.seconds
	formattedTime.minutes = 
		(formattedTime.minutes < 10)
		? '0' + formattedTime.minutes
		: formattedTime.minutes
	formattedTime.hours = 
		(formattedTime.hours < 10)
		? '0' + formattedTime.hours
		: formattedTime.hours
	formattedTime.hours = 
		(formattedTime.hours > 12)
		? (formattedTime.hours - 12)
		: formattedTime.hours
	return "hh:mm:ss dd"
		.replace("hh", formattedTime.hours)
		.replace("mm", formattedTime.minutes)
		.replace("ss", formattedTime.seconds)
		.replace("dd", formattedTime.ampm)
}

showTime = () => {
	utilities.chain(
		clearScreen,
		getCurrentTime,
		toObject,
		formatTime,
		console.log
	)(getCurrentTime())
}

module.exports = {
	showTime: showTime,
	oneSecond: oneSecond
}

// Gordon Hannington
