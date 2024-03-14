import React from 'react'
import { ButtonLg } from 'components/core'
import ProgressCard from './components/ProgressCard'
import Work from './components/Work'

import { Container, FooterButtonContainer, ScrollCustomized } from './styles'

const WorkoutPlanView: React.FC = () => {
	return (
		<>
			<ScrollCustomized>
				<Container>
					<ProgressCard />
					<Work />
					<Work />
					<Work />
					<Work />
					<Work />
					<Work />
					<Work />
					<Work />
				</Container>
			</ScrollCustomized>
			<FooterButtonContainer>
				<ButtonLg onPress={() => null}>Finalizar treino</ButtonLg>
			</FooterButtonContainer>
		</>
	)
}

export default WorkoutPlanView
