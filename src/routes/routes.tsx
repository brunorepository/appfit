import React from 'react'
import AppRoutes from 'routes/app/drawer.routes'
import AuthNavigation from 'routes/auth/auth.routes'
import { useAuth } from 'src/contexts/AuthContext'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	const { user } = useAuth()

	return <NavigationContainer>{user?.email ? <AppRoutes /> : <AuthNavigation />}</NavigationContainer>
}

export default Navigation
