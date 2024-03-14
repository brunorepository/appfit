import React from 'react'
import { Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { propsNavigationStack } from 'routes/models/stack-models'
import styled from 'styled-components/native'
import HomeView from 'views/app/Home/HomeView'
import WorkoutPlanView from 'views/app/WorkoutPlan/WorkoutPlanView'
import WorkRoomView from 'views/app/WorkRoom/WorkRoomView'
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
		color: #ccff00;
		font-family: 'OpenSans-Bold';
		font-size: 18px;
	`

	return (
		<Navigator>
			<Screen
				name="Home"
				component={HomeView}
				options={{
					headerShown: true,
					headerStyle: { backgroundColor: '#101012' },
					headerTitleStyle: {
						color: '#ffff',
						fontFamily: 'OpenSans-Bold',
						fontSize: 18,
					},
					headerRight: () =>
						userType !== 'personal' && (
							<TouchableOpacity activeOpacity={0.8} onPress={createTwoButtonAlert}>
								<Next>0:00</Next>
							</TouchableOpacity>
						),
					title: 'Olá, Bruno!',
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
					headerTintColor: '#CCFF00',
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
					headerTintColor: '#CCFF00',
					headerRight: () => (
						<TouchableOpacity activeOpacity={0.8} onPress={createTwoButtonAlert}>
							<Next>00:00</Next>
						</TouchableOpacity>
					),
					title: 'Esteira - 10 minutos',
				}}
			/>
		</Navigator>
	)
}

export default StackNavigation
