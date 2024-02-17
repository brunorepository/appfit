import React from 'react'
import { ScrollView } from 'react-native'
import { propsStack } from 'routes/models/stack-models'
import { EHealthProps } from 'src/types/Types'
import { useNavigation } from '@react-navigation/native'
import Card from './components/Card' // Ajuste o caminho conforme necessário

type CardData = {
	id: number
	title: string
}

const data: CardData[] = [
	{
		id: 1,
		title: 'Histórico de Doenças',
	},
	{
		id: 2,
		title: 'Histórico de Cirurgias',
	},
	{
		id: 3,
		title: 'Histórico de Medicamentos',
	},
	{
		id: 4,
		title: 'Histórico de Alergias',
	},
	{
		id: 5,
		title: 'Histórico de Imunizações',
	},
]

type CardListProps = {
	onPress: () => void
}

const CardList: React.FC<CardListProps> = () => {
	const navigation = useNavigation<propsStack>()

	const redirectToEquivalent = (id: number) => {
		switch (id) {
			case 1:
				navigation.navigate('ChangeDataHealth', { editingType: EHealthProps.Health })
				break
			case 2:
				navigation.navigate('ChangeDataHealth', { editingType: EHealthProps.Surgeries })
				break
			case 3:
				navigation.navigate('ChangeDataHealth', { editingType: EHealthProps.Medicines })
				break
			case 4:
				navigation.navigate('ChangeDataHealth', { editingType: EHealthProps.Allergies })
				break
			case 5:
				navigation.navigate('ChangeDataHealth', { editingType: EHealthProps.Immunizations })
				break
			default:
				navigation.navigate('ChangeDataHealth', { editingType: EHealthProps.Health })
		}
	}

	return (
		<ScrollView
			style={{
				width: '100%',
			}}
		>
			{data.map((item) => (
				<Card key={item.id} title={item.title} onPress={() => redirectToEquivalent(item.id)} />
			))}
		</ScrollView>
	)
}

export default CardList
