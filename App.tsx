import React from 'react'
import Navigation from 'routes/routes'
import { AuthProvider } from 'src/contexts/AuthContext'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed'

if (!__DEV__) {
	console.log = () => {}
}

const App: React.FC = () => {
	return (
		<AuthProvider>
			<GluestackUIProvider config={config}>
				<Navigation />
			</GluestackUIProvider>
		</AuthProvider>
	)
}

export default App
