import React from 'react'
import TabNavigation from 'routes/app/tabs/tabs.routes'
import AuthNavigation from 'routes/auth/auth.routes'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	const isAuthenticated = !false

	return <NavigationContainer>{isAuthenticated ? <TabNavigation /> : <AuthNavigation />}</NavigationContainer>
}

export default Navigation
