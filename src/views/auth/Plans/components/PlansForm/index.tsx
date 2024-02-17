import React from 'react' // Importando useState

import Instagram from 'react-native-vector-icons/MaterialCommunityIcons'
import Whatsapp from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ButtonLg } from 'components/core'

import {
	Form,
	PersonalPhoto,
	PersonalName,
	Header,
	PersonalInfo,
	Price,
	PriceType,
	PriceColumn,
	Target,
	PriceRow,
	HList,
	CardSm,
	CardContent,
	CardTitle,
} from './styles'

type PhysicalActivityHistoryFormProps = {
	handleLogin: () => void
	isLoading: boolean
}

const data = [
	{
		key: 1,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		title: 'Treinos personalizado',
		exercise: 'Costas',
		icon: 'calendar-check',
	},
	{
		key: 2,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		title: 'Treinos Extras',
		exercise: 'Braços',
		icon: 'file-document',
	},
	{
		key: 3,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		title: 'Nutrição',
		exercise: 'Peito',
		icon: 'food-apple',
	},
	{
		key: 4,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		title: 'Anamnese precisa',
		exercise: 'Peito',
		icon: 'account',
	},
]

const PlansForm: React.FC<PhysicalActivityHistoryFormProps> = ({ handleLogin, isLoading }) => {
	return (
		<Form>
			<Header>
				<PersonalPhoto
					source={{
						uri: 'https://scontent.cdninstagram.com/v/t51.2885-19/426680015_357818027102527_4131799786357857895_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=ukyD8WDJ1XYAX8m-5sH&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDkfmZr1NjZiVJA91zxbg0Qs9D-9oI_TWOIQA-e0w6tOA&oe=65D2FEA4&_nc_sid=10d13b',
					}}
				/>
				<PriceRow>
					<Whatsapp
						name="whatsapp"
						color="#ffff"
						size={30}
						style={{
							marginHorizontal: 8,
						}}
					/>
					<Instagram
						name="instagram"
						color="#ffff"
						size={30}
						style={{
							marginHorizontal: 8,
						}}
					/>
				</PriceRow>
				<PersonalName>Henrique Reis</PersonalName>
				<PersonalInfo>Sou Henrique, Personal Trainer dedicado a transformar vidas pelo fitness.</PersonalInfo>
			</Header>
			<HList
				horizontal
				data={data}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }: any) => (
					<CardSm activeOpacity={0.7} onPress={() => null}>
						<CardContent>
							<Icon name={item.icon} size={28} color="#ccff00" />
							<CardTitle>{item.title}</CardTitle>
						</CardContent>
					</CardSm>
				)}
			/>
			<PriceColumn>
				<Target>por apenas</Target>
				<Price>
					R$ 49,90 <PriceType>por mês</PriceType>
				</Price>
			</PriceColumn>

			<ButtonLg isLoading={isLoading} onPress={handleLogin}>
				Confirmar assinatura
			</ButtonLg>
		</Form>
	)
}

export default PlansForm