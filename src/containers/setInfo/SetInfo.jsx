import { useState } from 'react'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { alpha } from '@material-ui/core/styles'

import './setInfo.css'

const SetInfo = () => {
	const [date, setDate] = useState(new Date())
	const [eventName, setEventName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const actualDate = new Date().getTime()

		if (eventName.length <= 0) {
			alert('El evento Tiene que tener nombre')
		} else if (date.getTime() <= actualDate) {
			alert('El evento debe ser en el futuro')
		} else {
			alert('Evento')
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
