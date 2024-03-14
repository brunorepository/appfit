import React from 'react'
import { AppTemplate } from 'components/templates'
import Clients from './components/Clients'
import { Container } from './styles'

const NutritionView: React.FC = () => {
	return (
		<AppTemplate>
			<Container colors={['#1c1c1e', '#262525', '#ccff00b1']}>
				<Clients status="active" />
				<Clients status="inactive" />
				<Clients status="active" />
				<Clients status="inactive" />
				<Clients status="inactive" />
				<Clients status="inactive" />
			</Container>
		</AppTemplate>
	)
}

export default NutritionView
