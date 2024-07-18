import React, { useContext } from 'react'
import AppRoutes from 'routes/app/drawer.routes'
import AuthNavigation from 'routes/auth/auth.routes'
import { AuthContext } from 'src/contexts/AuthContext'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	const { user } = useContext(AuthContext)

	console.log(user)

	return <NavigationContainer>{user?.email ? <AppRoutes /> : <AuthNavigation />}</NavigationContainer>
}

export default Navigation
