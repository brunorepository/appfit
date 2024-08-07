import React from 'react'
import { propsNavigationStack } from 'routes/models/stack-models'
import LoginView from 'views/auth/Login/LoginView'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const SCREEN_CONFIG = [{ id: 1, name: 'Login', component: LoginView }]

const AuthNavigation: React.FC = () => {
	const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

	return (
		<Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#1c1c1e',
				},
				headerTintColor: '#ffff',
				headerTitleStyle: {
					fontFamily: 'OpenSans-SemiBold',
					fontSize: 16,
				},
			}}
		>
			{SCREEN_CONFIG.map((screen) => (
				<Screen
					key={screen.id}
					name={screen.name as keyof propsNavigationStack}
					component={screen.component as React.FC}
					options={{
						headerShown: false,
					}}
				/>
			))}
		</Navigator>
	)
}

export default AuthNavigation
