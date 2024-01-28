import React from 'react'
import { StatusBar } from 'react-native'
import Navigation from 'routes/routes'

const App: React.FC = () => {
	return (
		<>
			<StatusBar backgroundColor="#CCFF00" barStyle="dark-content" />
			<Navigation />
		</>
	)
}

export default App
