import React from 'react'
import { StatusBar } from 'react-native'
import Toast from 'react-native-toast-message'
import { RecoilRoot } from 'recoil'
import Navigation from 'routes/routes'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed'

const App: React.FC = () => {
	return (
		<RecoilRoot>
			<Toast position="top" />
			<GluestackUIProvider config={config}>
				<StatusBar backgroundColor="#1c1c1efb" barStyle="light-content" />
				<Navigation />
			</GluestackUIProvider>
		</RecoilRoot>
	)
}

export default App
