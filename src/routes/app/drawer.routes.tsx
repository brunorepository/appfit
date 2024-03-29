import React, { memo } from 'react'
import { DrawerSideBar } from 'components/core'
import { propsNavigationDrawer } from 'routes/models/drawer-navigation-models'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigation from './tabs/tabs.routes'

const drawerStyle = {
	drawerStyle: {
		backgroundColor: '#191919',
	},
}

const options = {
	headerShown: false,
}

const { Navigator, Screen } = createDrawerNavigator<propsNavigationDrawer>()

const AppRoutes: React.FC = () => (
	<Navigator screenOptions={drawerStyle} drawerContent={DrawerSideBar}>
		<Screen name="Main" component={TabNavigation} options={options} />
	</Navigator>
)

export default memo(AppRoutes)
