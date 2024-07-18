import React from 'react'
import { AppTemplate } from 'components/templates'
import ChartsComponent from './components/ChartsComponent'
import { Container } from './styles'

const ChartsView: React.FC = () => {
	return (
		<AppTemplate>
			<Container>
				<ChartsComponent
					onPressLinkShare={function (): void {
						throw new Error('Function not implemented.')
					}}
					onPressClients={function (): void {
						throw new Error('Function not implemented.')
					}}
				/>
			</Container>
		</AppTemplate>
	)
}

export default ChartsView
