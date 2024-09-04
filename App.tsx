import React, { useEffect } from 'react'
import { LogLevel, OneSignal } from 'react-native-onesignal'
import { RecoilRoot } from 'recoil'
import Navigation from 'routes/routes'
import { AuthProvider } from 'src/contexts/AuthContext'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed'

if (!__DEV__) {
	console.log = () => {}
}

const App: React.FC = () => {
	useEffect(() => {
		// Remove this method to stop OneSignal Debugging
		OneSignal.Debug.setLogLevel(LogLevel.Verbose)

		// OneSignal Initialization
		OneSignal.initialize('ONESIGNAL_APP_ID')

		// requestPermission will show the native iOS or Android notification permission prompt.
		// We recommend removing the following code and instead using an In-App Message to prompt for notification permission
		OneSignal.Notifications.requestPermission(true)

		// Method for listening for notification clicks
		OneSignal.Notifications.addEventListener('click', (event) => {
			console.log('OneSignal: notification clicked:', event)
		})
	}, []) // This empty array ensures the effect runs only once on mount

	return (
		<RecoilRoot>
			<AuthProvider>
				<GluestackUIProvider config={config}>
					<Navigation />
				</GluestackUIProvider>
			</AuthProvider>
		</RecoilRoot>
	)
}

export default App
