import React from 'react'
import { ButtonLg } from 'components/core'
import ProgressCard from './components/ProgressCard'
import Work from './components/Work'

import { Container, FooterButtonContainer, ScrollCustomized } from './styles'
import Images from 'src/adapters/constants/Images'

const WorkoutPlanView: React.FC = () => {
	return (
		<>
			<ScrollCustomized>
				<Container>
					<ProgressCard />
					<Work
						title={'Supino reto barra'}
						instructions={'4 séries de 12 repetições'}
						video={Images.TREINO1}
					/>
					<Work title={'Tricepes corda'} instructions={'3 séries de 15 repetições'} video={Images.TREINO2} />
					<Work
						title={'Desenvolvimento com halter'}
						instructions={'4 séries de 10 a 12 repetições'}
						video={Images.TREINO3}
					/>
					<Work
						title={'Puxada frente aberta'}
						instructions={'3 séries de 10 repetições'}
						video={Images.TREINO4}
					/>
					<Work
						title={'Elevação frontal com halter'}
						instructions={'4 séries de 12 repetições'}
						video={Images.TREINO5}
					/>
				</Container>
			</ScrollCustomized>
			<FooterButtonContainer>
				<ButtonLg onPress={() => null}>Iniciar o treino</ButtonLg>
			</FooterButtonContainer>
		</>
	)
}

export default WorkoutPlanView
