let clock = require('./tickingClock.js')

setInterval(
	clock.showTime,
	clock.oneSecond()
)
