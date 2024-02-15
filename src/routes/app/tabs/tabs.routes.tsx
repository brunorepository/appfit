import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Bell from 'react-native-vector-icons/MaterialCommunityIcons'
import { propsDrawer } from 'routes/models/drawer-navigation-models'
import { propsNavigationStack } from 'routes/models/stack-models'
import styled from 'styled-components/native'
import AccountView from 'views/app/Account/AccountView'
import HomeView from 'views/app/Home/HomeView'
import NutritionView from 'views/app/Nutrition/NutritionView'
import WorkoutsView from 'views/app/Workouts/WorkoutsView'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

const SCREEN_CONFIG = [
	{ id: 1, name: 'Home', component: HomeView, title: 'Meu Plano', icon: 'calendar-check' },
	{ id: 2, name: 'Training', component: WorkoutsView, title: 'Treinos extras', icon: 'file-document' },
	{ id: 3, name: 'Nutrition', component: NutritionView, title: 'Nutrição', icon: 'food-apple' },
	{ id: 4, name: 'Settings', component: AccountView, title: 'Conta', icon: 'account', showUserPhoto: true },
]

const TabNavigation: React.FC = () => {
	const { Navigator, Screen } = createBottomTabNavigator<propsNavigationStack>()

	const navigation = useNavigation<propsDrawer>()

	const UserPhoto = styled.Image`
		width: 30px;
		height: 30px;
		border-radius: 120px;
		background-color: #323232;
		border: solid 1px #ccff00;
	`
	const Touchable = styled.TouchableOpacity``

	return (
		<Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#1c1c1e',
					height: 60,
					shadowColor: '#CCFF00',
					shadowOffset: {
						width: 2,
						height: 2,
					},
					shadowOpacity: 0.5,
					shadowRadius: 3.84,
					elevation: 8,
				},
				tabBarAllowFontScaling: false,
				headerTitleAllowFontScaling: false,
				headerTintColor: '#CCFF00',
				tabBarActiveTintColor: '#CCFF00',
				headerTitleStyle: {
					fontFamily: 'OpenSans-Bold',
					fontSize: 14,
				},
				tabBarStyle: {
					backgroundColor: '#1c1c1efb',
					height: 70,
					paddingLeft: 10,
					paddingRight: 10,
					paddingTop: 6,
					paddingBottom: 6,
					borderTopWidth: 0,
					position: 'absolute',
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
					shadowColor: '#CCFF00',
					shadowOffset: {
						width: 2,
						height: 6,
					},
					shadowOpacity: 0.5,
					shadowRadius: 5,
					elevation: 8,
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
						headerTitleAlign: 'center',
						tabBarIcon: ({ color, size }) =>
							screen.showUserPhoto ? (
								<UserPhoto
									source={{
										uri: 'https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/360284187_628747575881805_6206994618273828932_n.jpg?ccb=11-4&oh=01_AdRH91AzlEIo3XpUT1kGcVm9sx1nUL4jUunaU-dMtTdhEA&oe=65CFAEEC&_nc_sid=e6ed6c&_nc_cat=108',
									}}
								/>
							) : (
								<Icon name={screen.icon} size={size} color={color} />
							),
						headerLeft: () => (
							<Touchable activeOpacity={0.8} onPress={() => navigation.openDrawer()}>
								<Bell
									name="menu"
									color="#CCFF00"
									size={20}
									style={{
										marginLeft: 12,
									}}
								/>
							</Touchable>
						),
						headerRight: () => (
							<Bell
								name="bell"
								color="#CCFF00"
								size={20}
								style={{
									marginRight: 12,
								}}
							/>
						),
					}}
				/>
			))}
		</Navigator>
	)
}

export default TabNavigation
