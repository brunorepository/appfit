import React from 'react'
import { TouchableOpacity } from 'react-native'
import FindChart from 'react-native-vector-icons/MaterialCommunityIcons'
import { propsNavigationStack, propsStack } from 'routes/models/stack-models'
import { useAuth } from 'src/contexts/AuthContext'
import AnamneseView from 'views/app/Anamnese/AnamneseView'
import ChartsView from 'views/app/Charts/ChartsView'
import HomeView from 'views/app/Home/HomeView'
import WorkoutPlanView from 'views/app/WorkoutPlan/WorkoutPlanView'
import WorkRoomView from 'views/app/WorkRoom/WorkRoomView'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigation: React.FC = () => {
	const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

	const { user } = useAuth()

	const navigation = useNavigation<propsStack>()

	// Array de telas e suas configurações
	const screens = [
		{
			name: 'Home' as keyof propsNavigationStack, // Isso garante que o nome é uma chave de propsNavigationStack
			component: HomeView,
			options: {
				headerShown: true,
				headerStyle: { backgroundColor: '#000000' },
				headerTitleStyle: {
					color: '#ffff',
					fontFamily: 'OpenSans-Bold',
					fontSize: 26,
				},
				headerRight: () => (
					<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Charts')}>
						<FindChart name="file-chart" size={25} color="#ffff" style={{ marginRight: 2 }} />
					</TouchableOpacity>
				),
				title: `Olá, ${user.full_name} 👋`,
			},
		},
		{
			name: 'WorkoutPlan' as keyof propsNavigationStack,
			component: WorkoutPlanView,
			options: {
				headerShown: true,
				headerStyle: { backgroundColor: '#101012' },
				headerTitleStyle: {
					color: '#ffff',
					fontFamily: 'OpenSans-SemiBold',
					fontSize: 18,
				},
				headerTintColor: '#0ED907',
				title: 'Exercícios',
			},
		},
		{
			name: 'WorkRoom' as keyof propsNavigationStack,
			component: WorkRoomView,
			options: {
				headerShown: true,
				headerStyle: { backgroundColor: '#101012' },
				headerTitleStyle: {
					color: '#ffff',
					fontFamily: 'OpenSans-SemiBold',
					fontSize: 18,
				},
				headerTintColor: '#0ED907',
			},
		},
		{
			name: 'Anamnese' as keyof propsNavigationStack,
			component: AnamneseView,
			options: {
				headerShown: true,
				headerStyle: { backgroundColor: '#101012' },
				headerTitleStyle: {
					color: '#ffff',
					fontFamily: 'OpenSans-SemiBold',
					fontSize: 18,
				},
				headerTintColor: '#0ED907',
				title: 'Ficha de anamnese',
			},
		},
		{
			name: 'Charts' as keyof propsNavigationStack,
			component: ChartsView,
			options: {
				headerShown: true,
				headerStyle: { backgroundColor: '#101012' },
				headerTitleStyle: {
					color: '#ffff',
					fontFamily: 'OpenSans-SemiBold',
					fontSize: 18,
				},
				headerTintColor: '#0ED907',
				title: 'Relatórios de treino',
			},
		},
	]

	return (
		<Navigator>
			{screens.map((screen) => (
				<Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
			))}
		</Navigator>
	)
}

export default StackNavigation
