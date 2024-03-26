import React from 'react'
import { AppTemplate } from 'components/templates'
import Clients from './components/Clients'
import Nutrition from './components/Nutrition'
import { Container } from './styles'

const NutritionView: React.FC = () => {
	const loggedUserType: any = 'student'

	// eslint-disable-next-line consistent-return
	const returnUserContent = () => {
		if (loggedUserType === 'personal') {
			return <Clients status="active" />
		}

		return <Nutrition />
	}

	return (
		<AppTemplate>
			<Container colors={['#1c1c1e', '#262525', '#ccff00b1']}>{returnUserContent()}</Container>
		</AppTemplate>
	)
}

export default NutritionView
