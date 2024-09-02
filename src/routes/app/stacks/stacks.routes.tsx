import React, { useContext } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import FindChart from 'react-native-vector-icons/MaterialCommunityIcons'
import { propsNavigationStack, propsStack } from 'routes/models/stack-models'
import { AuthContext } from 'src/contexts/AuthContext'
import styled from 'styled-components/native'
import AnamneseView from 'views/app/Anamnese/AnamneseView'
import ChartsView from 'views/app/Charts/ChartsView'
import HomeView from 'views/app/Home/HomeView'
import WorkoutPlanView from 'views/app/WorkoutPlan/WorkoutPlanView'
import WorkRoomView from 'views/app/WorkRoom/WorkRoomView'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigation: React.FC = () => {
	const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

	const userType = 'personal'

	const Next = styled.Text`
		color: #0ed907;
		font-family: 'OpenSans-Bold';
		font-size: 18px;
	`

	const { user } = useContext(AuthContext)

	const navigation = useNavigation<propsStack>()

	return (
		<Navigator>
			<Screen
				name="Home"
				component={HomeView}
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#000000' },

					headerTitleStyle: {
						color: '#ffff',
						fontFamily: 'OpenSans-Bold',
						fontSize: 26,
					},
					headerRight: () =>
						userType !== 'personal' ? (
							<TouchableOpacity activeOpacity={0.8}>
								<Next>0:00</Next>
							</TouchableOpacity>
						) : (
							<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Charts')}>
								<FindChart
									name="file-chart"
									size={25}
									color="#ffff"
									style={{
										marginRight: 2,
									}}
								/>
							</TouchableOpacity>
						),
					title: `Olá, ${user.full_name} 👋`,
				}}
			/>
			<Screen
				name="WorkoutPlan"
				component={WorkoutPlanView}
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#101012' },
					headerTitleStyle: {
						color: '#ffff',
						fontFamily: 'OpenSans-SemiBold',
						fontSize: 18,
					},
					headerTintColor: '#0ED907',
					title: 'Exercícios',
				}}
				// Listener para interceptar a navegação e exibir o alerta
				listeners={{
					beforeRemove: (e) => {
						// Interceptar a navegação se o treino não estiver finalizado
						e.preventDefault()

						Alert.alert('Sair sem finalizar?', 'Você ainda não concluiu o treino. Deseja realmente sair?', [
							{ text: 'Cancelar', style: 'cancel', onPress: () => {} },
							{
								text: 'Sair',
								style: 'destructive',
								onPress: () => navigation.dispatch(e.data.action), // Permitir a navegação
							},
						])
					},
				}}
			/>
			<Screen
				name="WorkRoom"
				component={WorkRoomView}
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#101012' },
					headerTitleStyle: {
						color: '#ffff',
						fontFamily: 'OpenSans-SemiBold',
						fontSize: 18,
					},
					headerTintColor: '#0ED907',
				}}
			/>
			<Screen
				name="Anamnese"
				component={AnamneseView}
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#101012' },
					headerTitleStyle: {
						color: '#ffff',
						fontFamily: 'OpenSans-SemiBold',
						fontSize: 18,
					},
					headerTintColor: '#0ED907',
					title: 'Ficha de anamnese',
				}}
			/>
			<Screen
				name="Charts"
				component={ChartsView}
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#101012' },
					headerTitleStyle: {
						color: '#ffff',
						fontFamily: 'OpenSans-SemiBold',
						fontSize: 18,
					},
					headerTintColor: '#0ED907',
					title: 'Relatórios de treino',
				}}
			/>
		</Navigator>
	)
}

export default StackNavigation
