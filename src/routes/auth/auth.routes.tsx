import React from 'react'
import { propsNavigationStack } from 'routes/models/stack-models'
import DiseasesFamilyView from 'views/auth/DiseasesFamily/DiseasesFamilyView'
import IllnessesView from 'views/auth/Illnesses/IllnessesView'
import JoysView from 'views/auth/Joys/JoysView'
import LoginView from 'views/auth/Login/LoginView'
import MedicinesView from 'views/auth/Medicines/MedicinesView'
import PersonalInformationsView from 'views/auth/PersonalInformations/PersonalInformationsView'
import QuizView from 'views/auth/Quiz/QuizView'
import SurgeriesView from 'views/auth/Surgeries/SurgeriesView'
import VaccinesView from 'views/auth/Vaccines/VaccinesView'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const SCREEN_CONFIG = [
	{ id: 1, name: 'Login', component: LoginView, title: 'Entrar' },
	{ id: 2, name: 'PersonalInformations', component: PersonalInformationsView, title: 'Informações pessoais' },
	{ id: 3, name: 'Quiz', component: QuizView, title: 'Questionário' },
	{ id: 4, name: 'Surgeries', component: SurgeriesView, title: 'Cirurgias' },
	{ id: 5, name: 'Illnesses', component: IllnessesView, title: 'Doenças' },
	{ id: 6, name: 'Joys', component: JoysView, title: 'Alergias' },
	{ id: 7, name: 'Medicines', component: MedicinesView, title: 'Remédios' },
	{ id: 8, name: 'Vaccines', component: VaccinesView, title: 'Vacinas' },
	{ id: 9, name: 'DiseasesFamily', component: DiseasesFamilyView, title: 'Doenças familiares relevantes' },
]

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
						headerShown: true,
						title: screen.title,
					}}
				/>
			))}
		</Navigator>
	)
}

export default AuthNavigation
