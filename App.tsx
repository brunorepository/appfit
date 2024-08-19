import React from 'react'
import { RecoilRoot } from 'recoil'
import Navigation from 'routes/routes'
import { AuthProvider } from 'src/contexts/AuthContext'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { Text, TextInput } from 'react-native'

// Desabilitar font scaling globalmente
Text.defaultProps = {
	...(Text.defaultProps || {}),
	allowFontScaling: false,
}

TextInput.defaultProps = {
	...(TextInput.defaultProps || {}),
	allowFontScaling: false,
}

const App: React.FC = () => {
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
