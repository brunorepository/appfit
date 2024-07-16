import React, { useContext } from 'react'
import { Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'
import FindChart from 'react-native-vector-icons/MaterialCommunityIcons'
import { propsNavigationStack, propsStack } from 'routes/models/stack-models'
import { AuthContext } from 'src/contexts/AuthContext'
import styled from 'styled-components/native'
import ChartsView from 'views/app/Charts/ChartsView'
import HomeView from 'views/app/Home/HomeView'
import WorkoutPlanView from 'views/app/WorkoutPlan/WorkoutPlanView'
import WorkRoomView from 'views/app/WorkRoom/WorkRoomView'
import YourPlanView from 'views/app/YourPlan/YourPlanView'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigation: React.FC = () => {
	const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

	const userType = 'personal'

	const createTwoButtonAlert = () =>
		Alert.alert(
			'Tem certeza que deseja terminar o treino?',
			'',
			[
				{
					text: 'Não',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{ text: 'Sim', onPress: () => console.log('OK Pressed') },
			],
			{ cancelable: false }
		)

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
							<TouchableOpacity activeOpacity={0.8} onPress={createTwoButtonAlert}>
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
					title: `Olá, ${user.name} 👋`,
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
					headerRight: () => (
						<TouchableOpacity activeOpacity={0.8} onPress={createTwoButtonAlert}>
							<Next>00:00</Next>
						</TouchableOpacity>
					),
					title: 'Treino de hoje - Exercícios',
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
					headerRight: () => (
						<TouchableOpacity activeOpacity={0.8} onPress={createTwoButtonAlert}>
							<Next>00:00</Next>
						</TouchableOpacity>
					),
					title: 'Remada máquina unilateral - 10 minutos',
				}}
			/>
			<Screen
				name="YourPlan"
				component={YourPlanView}
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#101012' },
					headerTitleStyle: {
						color: '#ffff',
						fontFamily: 'OpenSans-SemiBold',
						fontSize: 18,
					},
					headerTintColor: '#0ED907',
					title: 'Assinatura',
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
					title: 'Relátorios de treino',
				}}
			/>
		</Navigator>
	)
}

export default StackNavigation
