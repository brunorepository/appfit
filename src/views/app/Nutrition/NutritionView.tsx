import React from 'react'
import { AppTemplate } from 'components/templates'
import { Container } from './styles'

const NutritionView: React.FC = () => {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return (
		<AppTemplate>
			<Container colors={['#1c1c1e', '#262525', '#ccff00b1']} />
		</AppTemplate>
	)
}

export default NutritionView
