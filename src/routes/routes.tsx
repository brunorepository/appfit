import React from 'react'
import { useRecoilState } from 'recoil'
import AppRoutes from 'routes/app/drawer.routes'
import AuthNavigation from 'routes/auth/auth.routes'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	const [user, setAuthContext] = useRecoilState(isAuthenticated)

	return <NavigationContainer>{user ? <AppRoutes /> : <AuthNavigation />}</NavigationContainer>
}

export default Navigation
