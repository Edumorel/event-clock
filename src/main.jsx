import reactDOM from 'react-dom'
import App from './App.jsx'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import './styles/index.css'

reactDOM.render(
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
		<App />
	</MuiPickersUtilsProvider>,
	document.getElementById('root')
)
