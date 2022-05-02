import { useState } from 'react'
import { useLocation } from 'wouter'
import { DatePicker, TimePicker } from '@material-ui/pickers'

import './setInfo.css'

const SetInfo = () => {
	const [date, setDate] = useState(new Date())
	const [eventName, setEventName] = useState('')
	const [location, setLocation] = useLocation()

	const handleSubmit = (e) => {
		e.preventDefault()

		const actualDate = new Date().getTime()

		if (eventName.length <= 0) {
			alert('El evento Tiene que tener nombre')
		} else if (date.getTime() <= actualDate) {
			alert('El evento debe ser en el futuro')
		} else {
			setLocation(`/clock?date=${date.getTime()}&name=${eventName}`)
		}
	}

	return (
		<form className='set_info_form' onSubmit={handleSubmit}>
			<h1>Crea tu reloj para eventos</h1>
			<div className='set_info_form_inputs'>
				<input
					placeholder='Nombre del evento'
					onChange={(e) => setEventName(e.target.value)}
					className='input input_name'
				/>
				<DatePicker value={date} onChange={setDate} className='input' />
				<TimePicker value={date} onChange={setDate} className='input' />
			</div>

			<button className='set_info_form_button'>Crear reloj</button>
		</form>
	)
}

export default SetInfo
