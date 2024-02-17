import React from 'react'
import { propsNavigationStack } from 'routes/models/stack-models'
import AvailabilityView from 'views/auth/Availability/AvailabilityView'
import AvailableEquipmentView from 'views/auth/AvailableEquipment/AvailableEquipmentView'
import ChangeDataHealthView from 'views/auth/ChangeDataHealth/ChangeDataHealthView'
import CreateAccountView from 'views/auth/CreateAccount/CreateAccountView'
import ForgotPasswordView from 'views/auth/ForgotPassword/ForgotPasswordView'
import GoalsView from 'views/auth/Goals/GoalsView'
import HealthView from 'views/auth/Health/HealthView'
import LifeHabitsView from 'views/auth/LifeHabits/LifeHabitsView'
import LoginView from 'views/auth/Login/LoginView'

import NutritionView from 'views/auth/Nutrition/NutritionView'
import PhysicalActivityHistoryView from 'views/auth/PhysicalActivityHistory/PhysicalActivityHistoryView'
import PlansView from 'views/auth/Plans/PlansView'
import PhysicalAssessmentView from 'views/PhysicalAssessment/PhysicalAssessmentView'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const SCREEN_CONFIG = [
	{ id: 1, name: 'Login', component: LoginView },
	{ id: 2, name: 'ForgotPassword', component: ForgotPasswordView },
	{ id: 3, name: 'CreateAccount', component: CreateAccountView },
	{ id: 4, name: 'Goals', component: GoalsView },
	{ id: 5, name: 'Health', component: HealthView },
	{ id: 6, name: 'PhysicalActivityHistory', component: PhysicalActivityHistoryView },
	{ id: 7, name: 'PhysicalAssessment', component: PhysicalAssessmentView },
	{ id: 8, name: 'Nutrition', component: NutritionView },
	{ id: 9, name: 'LifeHabits', component: LifeHabitsView },
	{ id: 10, name: 'Availability', component: AvailabilityView },
	{ id: 11, name: 'AvailableEquipment', component: AvailableEquipmentView },
	{ id: 12, name: 'Plans', component: PlansView },
	{ id: 13, name: 'ChangeDataHealth', component: ChangeDataHealthView },
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
						headerShown: false,
					}}
				/>
			))}
		</Navigator>
	)
}

export default AuthNavigation
