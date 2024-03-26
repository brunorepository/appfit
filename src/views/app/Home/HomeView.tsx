import React, { useState } from 'react'

import { AppTemplate } from 'components/templates'
// import { propsStack } from 'routes/models/stack-models'
import { propsStack } from 'routes/models/stack-models'
import ModalAnamnese from 'views/app/Home/components/ModalAnamnese'
import PersonalCharts from 'views/app/Home/components/PersonalCharts'
// import { useNavigation } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import ModalLink from './components/ModalLink'
import {
	Banner,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
	CardTitleSm,
	Container,
	FooterStart,
	HList,
	Heading,
	BadgeText,
	Badge,
	HeaderStart,
	BannerSm,
	CardSm,
} from './styles'

interface CardItem {
	key: number
	source: { uri: string }
	days: string
	exercise: string
}

const data: CardItem[] = [
	{
		key: 1,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Segunda-feira',
		exercise: 'Costas',
	},
	{
		key: 2,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Terça-feira',
		exercise: 'Braços',
	},
	{
		key: 3,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Quarta-feira',
		exercise: 'Peito',
	},
	{
		key: 4,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Quinta-feira',
		exercise: 'Braços',
	},
	{
		key: 5,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Sexta-feira',
		exercise: 'Braços',
	},
	{
		key: 6,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Sábado',
		exercise: 'Braços',
	},
	{
		key: 7,
		source: {
			uri: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg',
		},
		days: 'Domingo',
		exercise: 'Braços',
	},
]

const HomeView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const [modalVisible, setModalVisible] = useState(false)

	const loggedUserType: any = 'student'

	if (loggedUserType === 'personal') {
		return (
			<AppTemplate>
				<Container>
					<ModalLink isVisible={modalVisible} onBackdropPress={() => setModalVisible(!modalVisible)} />
					<PersonalCharts
						onPressLinkShare={() => setModalVisible(true)}
						onPressClients={() => navigation.navigate('Nutrition')}
					/>
				</Container>
			</AppTemplate>
		)
	}

	return (
		<AppTemplate>
			<Container>
				<ModalAnamnese isVisible={!modalVisible} onBackdropPress={() => setModalVisible(!modalVisible)} />

				<Card activeOpacity={0.8} onPress={() => navigation.navigate('WorkoutPlan')}>
					<Banner
						source={{
							uri: 'https://s2-techtudo.glbimg.com/M8EXp8JrvIWbZf_Z2PU8y1PqZSk=/0x0:620x317/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/N/J/qblUsXRhiDT61CQQ3msA/2012-10-23-video-mostra-como-pegar-uma-garota-na-academia-literalmente.jpg',
						}}
					/>
					<CardContent>
						<HeaderStart>
							<Badge>
								<BadgeText
									fontSize={11}
									color="$black"
									fontFamily="OpenSans-Medium"
									textTransform="capitalize"
									allowFontScaling={false}
								>
									📅 Treino de hoje
								</BadgeText>
							</Badge>
						</HeaderStart>

						<CardTitle allowFontScaling={false}>Treino de costas</CardTitle>

						<CardFooter>
							<FooterStart>
								<CardDescription allowFontScaling={false}>
									Um treino de corpo inteiro ataca todos os principais músculos com exercícios
									compostos e isolados, incluindo aquecimento e alongamento.
								</CardDescription>
							</FooterStart>
						</CardFooter>
					</CardContent>
				</Card>

				<Heading allowFontScaling={false}>Treinos da semana</Heading>
				<HList
					horizontal
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }: any) => (
						<CardSm activeOpacity={0.7} onPress={() => navigation.navigate('WorkoutPlan')}>
							<BannerSm
								source={{
									uri: 'https://s2-techtudo.glbimg.com/M8EXp8JrvIWbZf_Z2PU8y1PqZSk=/0x0:620x317/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/N/J/qblUsXRhiDT61CQQ3msA/2012-10-23-video-mostra-como-pegar-uma-garota-na-academia-literalmente.jpg',
								}}
							/>
							<CardContent
								style={{
									marginTop: -140,
								}}
							>
								<HeaderStart>
									<Badge>
										<BadgeText
											fontSize={16}
											color="$black"
											fontFamily="OpenSans-Medium"
											textTransform="capitalize"
											allowFontScaling={false}
										>
											🏋️‍♀️ {item.exercise}
										</BadgeText>
									</Badge>
								</HeaderStart>

								<CardTitleSm allowFontScaling={false}>{item.days} 📅</CardTitleSm>
								<CardDescription allowFontScaling={false}>Um treino</CardDescription>
							</CardContent>
						</CardSm>
					)}
				/>
				<Heading allowFontScaling={false}>Treinos extras</Heading>
				<HList
					horizontal
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }: any) => (
						<CardSm activeOpacity={0.7} onPress={() => null}>
							<BannerSm
								source={{
									uri: 'https://s2-techtudo.glbimg.com/M8EXp8JrvIWbZf_Z2PU8y1PqZSk=/0x0:620x317/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/N/J/qblUsXRhiDT61CQQ3msA/2012-10-23-video-mostra-como-pegar-uma-garota-na-academia-literalmente.jpg',
								}}
							/>
							<CardContent
								style={{
									marginTop: -140,
								}}
							>
								<HeaderStart>
									<Badge>
										<BadgeText
											fontSize={16}
											color="$black"
											fontFamily="OpenSans-Medium"
											textTransform="capitalize"
											allowFontScaling={false}
										>
											🏋️‍♀️ {item.exercise}
										</BadgeText>
									</Badge>
								</HeaderStart>

								<CardTitleSm allowFontScaling={false}>{item.days} 📅</CardTitleSm>
								<CardDescription allowFontScaling={false}>Um treino</CardDescription>
							</CardContent>
						</CardSm>
					)}
				/>
			</Container>
		</AppTemplate>
	)
}

export default HomeView
