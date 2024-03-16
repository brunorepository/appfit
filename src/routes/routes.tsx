import React from 'react'
import AppRoutes from 'routes/app/drawer.routes'
import AuthNavigation from 'routes/auth/auth.routes'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	const authState = false

	return <NavigationContainer>{authState ? <AppRoutes /> : <AuthNavigation />}</NavigationContainer>
}

export default Navigation
