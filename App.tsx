import React from 'react'
import { RecoilRoot } from 'recoil'
import Navigation from 'routes/routes'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed'

const App: React.FC = () => {
	return (
		<RecoilRoot>
			<GluestackUIProvider config={config}>
				<Navigation />
			</GluestackUIProvider>
		</RecoilRoot>
	)
}

export default App
