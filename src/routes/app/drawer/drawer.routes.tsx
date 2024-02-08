import React, { memo } from 'react'
import { propsNavigationDrawer } from 'routes/models/drawer-navigation-models'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigation from '../tabs/tabs.routes'

const drawerStyle = {
	swipeEnabled: false,
	drawerStyle: {
		backgroundColor: '#191919',
	},
}

const options = {
	headerShown: false,
}

const { Navigator, Screen } = createDrawerNavigator<propsNavigationDrawer>()

const DrawerRoutes: React.FC = () => (
	<Navigator screenOptions={drawerStyle}>
		<Screen name="Main" component={TabNavigation} options={options} />
	</Navigator>
)

export default memo(DrawerRoutes)
