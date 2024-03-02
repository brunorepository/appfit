import React from 'react'
import { ScrollView } from 'react-native'
import { useRecoilState } from 'recoil'
import { propsStack } from 'routes/models/stack-models'
import { EHealthProps } from 'src/types/Types'
import selectedHealthItemsAtom from 'store/atoms/selectedHealthItems'
import { useNavigation } from '@react-navigation/native'
import Card from './components/Card' // Ajuste o caminho conforme necessário

type CardData = {
	id: number
	title: string
	isSelected: boolean
}

const data: CardData[] = [
	{
		id: 1,
		title: 'Histórico de Doenças',
		isSelected: true,
	},
	{
		id: 2,
		title: 'Histórico de Cirurgias',
		isSelected: true,
	},
	{
		id: 3,
		title: 'Histórico de Medicamentos',
		isSelected: true,
	},
	{
		id: 4,
		title: 'Histórico de Alergias',
		isSelected: false,
	},
	{
		id: 5,
		title: 'Histórico de Imunizações',
		isSelected: false,
	},
]

type CardListProps = {
	onPress: () => void
}

const CardList: React.FC<CardListProps> = () => {
	const navigation = useNavigation<propsStack>()

	const [selectedHealthItemsState, setSelectedItems] = useRecoilState(selectedHealthItemsAtom)

	console.log(selectedHealthItemsState.find((item) => item === EHealthProps.Health))

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

	// eslint-disable-next-line react-hooks/exhaustive-deps

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
					onPress={() => redirectToEquivalent(item.id)}
					isSelected={item.isSelected}
				/>
			))}
		</ScrollView>
	)
}

export default CardList
