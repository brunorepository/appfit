import React from 'react'
import LoginView from 'views/auth/Login/LoginView'
import PersonalInformationsView from 'views/auth/PersonalInformations/PersonalInformationsView'
import QuizView from 'views/auth/Quiz/QuizView'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthNavigation: React.FC = () => {
	const { Navigator, Screen } = createNativeStackNavigator()

	return (
		<Navigator>
			<Screen
				name="Login"
				component={LoginView}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name="PersonalInformations"
				component={PersonalInformationsView}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name="Quiz"
				component={QuizView}
				options={{
					headerShown: false,
				}}
			/>
		</Navigator>
	)
}

export default AuthNavigation
