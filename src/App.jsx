import { Route, Switch } from 'wouter'

import SetInfo from './containers/setInfo/SetInfo.jsx'
import TimerContent from './containers/timerContent/TimerContent.jsx'

const App = () => {
	return (
		<div className='content-all'>
			<Switch>
				<Route path='/' component={SetInfo} />
				<Route path='/clock' component={TimerContent} />
			</Switch>
		</div>
	)
}

export default App
