import { useState } from 'react'
import { useLocation } from 'wouter'
import Timer from '../../components/timer/Timer.jsx'
import getSearch from '../../servicies/getSearch.js'

import './timerContent.css'

const TimerContent = () => {
	const search = window.location.search.replace('?', '')
	const [location, setLocation] = useLocation()

	if (
		search.length <= 0 ||
		!search.includes('date=') ||
		!search.includes('name=')
	) {
		setLocation('/')
	}

	const info = getSearch(search)

	return (
		<section className='timer_content'>
			<h1 className='timer_content_name'>{info.name}</h1>

			<Timer date={info.date} />
		</section>
	)
}

export default TimerContent
