import React from 'react'
import { useRecoilState } from 'recoil'
import TabNavigation from 'routes/app/tabs/tabs.routes'
import AuthNavigation from 'routes/auth/auth.routes'
import isAuthenticated from 'store/atoms/isAuthenticatedAtom'
import { NavigationContainer } from '@react-navigation/native'

const Navigation: React.FC = () => {
	const [authState] = useRecoilState(isAuthenticated)

	return <NavigationContainer>{authState ? <TabNavigation /> : <AuthNavigation />}</NavigationContainer>
}

export default Navigation
