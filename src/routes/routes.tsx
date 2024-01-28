import React from 'react'
import AuthNavigation from 'routes/auth/auth.routes'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<AuthNavigation />
		</NavigationContainer>
	)
}

export default Navigation
