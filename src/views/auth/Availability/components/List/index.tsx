import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Card from './components/Card' // Ajuste o caminho conforme necessário

type CardData = {
	id: number
	title: string
}

const data: CardData[] = [
	{
		id: 1,
		title: 'Pelo menos um ano',
	},
	{
		id: 2,
		title: 'Pelo menos 3 meses',
	},
	{
		id: 3,
		title: 'Pelo menos 1 mês',
	},
]

const CardList: React.FC = () => {
	const [selectedId, setSelectedId] = useState<number | null>(null)

	return (
		<ScrollView
			style={{
				width: '100%',
			}}
		>
			{data.map((item) => (
				<Card
					key={item.id}
					title={item.title}
					isSelected={item.id === selectedId}
					onPress={() => setSelectedId(item.id)}
				/>
			))}
		</ScrollView>
	)
}

export default CardList
