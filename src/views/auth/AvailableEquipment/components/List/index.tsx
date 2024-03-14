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
		title: 'Em casa',
	},
	{
		id: 2,
		title: 'Na academia',
	},
	{
		id: 3,
		title: 'Aulas em estúdio',
	},

	{
		id: 4,
		title: 'Ao ar livre',
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
