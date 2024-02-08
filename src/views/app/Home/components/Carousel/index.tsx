import React from 'react'
import { ScrollView } from 'react-native'
import { Container, CardContainer, CardText } from './styles'

const HorizontalCardList = () => {
	const data = [
		{ id: 1, title: 'Card 1' },
		{ id: 2, title: 'Card 2' },
		{ id: 3, title: 'Card 3' },
		// Adicione mais itens conforme necessário
	]

	return (
		<Container>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{data.map((item) => (
					<CardContainer key={item.id}>
						<CardText>{item.title}</CardText>
					</CardContainer>
				))}
			</ScrollView>
		</Container>
	)
}

export default HorizontalCardList
