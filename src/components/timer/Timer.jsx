import { useEffect, useState } from 'react'
import TimeNumber from '../timeNumber/TimeNumber.jsx'

import './timer.css'

const Timer = ({ date = 0 }) => {
	date = Number(date)

	const [days, setDays] = useState(0)
	const [hours, setHours] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)

	if (!date) date = new Date().getTime()

	const setTime = () => {
		let diference = date - new Date().getTime()

		if (diference <= 0) return

		diference /= 1000

		const totalDays = Math.floor(diference / 86400)
		diference -= 86400 * totalDays

		const totalHours = Math.floor(diference / 3600)
		diference -= 3600 * totalHours

		const totalMinutes = Math.floor(diference / 60)
		diference -= 60 * totalMinutes

		setDays(totalDays)
		setHours(totalHours)
		setMinutes(totalMinutes)
		setSeconds(Math.floor(diference))
	}

	useEffect(() => {
		setInterval(setTime, 200)
		setTime()
	})

	return (
		<div className='timer'>
			<TimeNumber number={days} text='Days' />
			<TimeNumber number={hours} text='Hour' />
			<TimeNumber number={minutes} text='Minutes' />
			<TimeNumber number={seconds} text='Seconds' />
		</div>
	)
}

export default Timer
