import React from 'react'
import { propsNavigationStack } from 'routes/models/stack-models'
import LoginView from 'views/auth/Login/LoginView'
import PersonalInformationsView from 'views/auth/PersonalInformations/PersonalInformationsView'
import QuizView from 'views/auth/Quiz/QuizView'
import SurgeriesView from 'views/auth/Surgeries/SurgeriesView'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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
			<Screen
				name="Login"
				component={LoginView}
				options={{
					headerShown: true,
					title: 'Entrar',
				}}
			/>
			<Screen
				name="PersonalInformations"
				component={PersonalInformationsView}
				options={{
					headerShown: true,
					title: 'Informações pessoais',
				}}
			/>
			<Screen
				name="Quiz"
				component={QuizView}
				options={{
					headerShown: true,
					title: 'Questionário',
				}}
			/>
			<Screen
				name="Surgeries"
				component={SurgeriesView}
				options={{
					headerShown: true,
					title: 'Cirurgias',
				}}
			/>
		</Navigator>
	)
}

export default AuthNavigation
