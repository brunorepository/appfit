import React from 'react'
import DrawerRoutes from 'routes/app/drawer/drawer.routes'
import AuthNavigation from 'routes/auth/auth.routes'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	const isAuthenticated = true

	return <NavigationContainer>{isAuthenticated ? <DrawerRoutes /> : <AuthNavigation />}</NavigationContainer>
}

export default Navigation
