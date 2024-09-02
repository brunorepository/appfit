import React from 'react'
import Users from 'react-native-vector-icons/FontAwesome6'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Bell from 'react-native-vector-icons/MaterialCommunityIcons'
import StackNavigation from 'routes/app/stacks/stacks.routes'
import { propsDrawer } from 'routes/models/drawer-navigation-models'
import { propsNavigationStack } from 'routes/models/stack-models'
import styled from 'styled-components/native'
import NutritionView from 'views/app/Nutrition/NutritionView'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

const TabNavigation: React.FC = () => {
	const { Navigator, Screen } = createBottomTabNavigator<propsNavigationStack>()

	const userType: any = 'student'

	const navigation = useNavigation<propsDrawer>()

	const Touchable = styled.TouchableOpacity``

	const SCREEN_CONFIG = [
		{
			id: 1,
			name: 'Home',
			component: StackNavigation,
			title: 'Meu plano',
			icon: userType === 'personal' ? 'money-bill-trend-up' : 'calendar-check',
		},
		{
			id: 3,
			name: 'Nutrition',
			component: NutritionView,
			title: 'Plano de dieta',
			icon: userType === 'personal' ? 'users' : 'food-apple',
		},
	]

	return (
		<Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#1c1c1e',
					borderBottomWidth: 0,
				},
				tabBarHideOnKeyboard: true,
				tabBarAllowFontScaling: false,
				headerTitleAllowFontScaling: false,
				headerTintColor: '#0ED907',
				tabBarActiveTintColor: '#0ED907',
				headerTitleStyle: {
					fontFamily: 'OpenSans-Bold',
					fontSize: 14,
				},
				tabBarLabelStyle: {
					fontFamily: 'OpenSans-SemiBold',
				},
				tabBarStyle: {
					backgroundColor: '#1c1c1e',
					height: 65,
					paddingTop: 6,
					paddingBottom: 6,
					borderTopWidth: 0,
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
						headerTitle: screen.title,
						title: screen.title,
						headerTitleAlign: 'center',
						tabBarIcon: ({ color, size }) =>
							userType === 'personal' ? (
								<Users name={screen.icon} size={size * 1.2} color={color} />
							) : (
								<Icon name={screen.icon} size={size * 1.2} color={color} />
							),
						headerLeft: () => (
							<Touchable activeOpacity={0.8} onPress={() => navigation.openDrawer()}>
								<Bell
									name="menu"
									color="#0ED907"
									size={20}
									style={{
										marginLeft: 12,
									}}
								/>
							</Touchable>
						),
					}}
				/>
			))}
		</Navigator>
	)
}

export default TabNavigation
