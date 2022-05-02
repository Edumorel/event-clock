import './timeNumber.css'

const TimeNumber = ({ number = 0, text = '' }) => {
	return (
		<div className='time_number_content'>
			<div className='time_number'>
				<span>{number}</span>
			</div>

			<div className='time_number_text'>
				<span>{text}</span>
			</div>
		</div>
	)
}

export default TimeNumber
