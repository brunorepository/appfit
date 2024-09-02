import React from 'react'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { CardDescription, Charts, FlexColumn, GreenCircle, SalesCard, Label, Title } from './styles'

type PersonalChartsProps = {
	onPressLinkShare: () => void
	onPressClients: () => void
}

const ChartsComponent: React.FC<PersonalChartsProps> = () => {
	return (
		<Charts>
			<SalesCard activeOpacity={0.8}>
				<FlexColumn>
					<Label>data do treino: 12/07/2024</Label>
					<Title>Treino de costas</Title>
					<CardDescription>
						Um treino de corpo inteiro ataca todos os principais músculos com exercícios compostos e
						isolados, incluindo aquecimento e alongamento.
					</CardDescription>
				</FlexColumn>
				<GreenCircle>
					<Icons name="file-pdf-box" color="#ffffff" size={32} />
				</GreenCircle>
			</SalesCard>
		</Charts>
	)
}

export default ChartsComponent
