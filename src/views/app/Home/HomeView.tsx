import React, { useState } from 'react'

import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { AppTemplate } from 'components/templates'
// import { propsStack } from 'routes/models/stack-models'
import { propsStack } from 'routes/models/stack-models'
import { Images } from 'src/adapters/constants'
import PersonalCharts from 'views/app/Home/components/PersonalCharts'
import { ClockIcon } from '@gluestack-ui/themed'
// import { useNavigation } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import ModalLink from './components/ModalLink'
import {
	Banner,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardSm,
	CardText,
	CardTextRow,
	CardTitle,
	CardTitleSm,
	Container,
	FooterStart,
	HList,
	Heading,
	BadgeText,
	Value,
	Badge,
	HeaderStart,
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

	const loggedUserType = 'personal'

	if (loggedUserType === 'personal') {
		return (
			<AppTemplate>
				<Container>
					<ModalLink isVisible={modalVisible} onBackdropPress={() => setModalVisible(!modalVisible)} />
					<PersonalCharts onPressLinkShare={() => setModalVisible(true)} />
				</Container>
			</AppTemplate>
		)
	}

	return (
		<AppTemplate>
			<Container>
				<Card activeOpacity={0.8} onPress={() => navigation.navigate('WorkoutPlan')}>
					<Banner source={Images.TRAINING_ONE} />
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
									Treino de hoje
								</BadgeText>
							</Badge>
						</HeaderStart>

						<CardTitle allowFontScaling={false}>Força em todo o corpo</CardTitle>

						<CardFooter>
							<FooterStart>
								<CardDescription allowFontScaling={false}>
									Um treino de corpo inteiro ataca todos os principais músculos com exercícios
									compostos e isolados, incluindo aquecimento e alongamento.
								</CardDescription>
							</FooterStart>
							<AnimatedCircularProgress
								size={32}
								width={4}
								fill={100}
								tintColor="#ccff00"
								onAnimationComplete={() => null}
								backgroundColor="#585958"
							>
								{(fill) => <Value allowFontScaling={false}>{fill}%</Value>}
							</AnimatedCircularProgress>
						</CardFooter>
					</CardContent>
				</Card>

				<Heading allowFontScaling={false}>Treinos da semana</Heading>
				<HList
					horizontal
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }: any) => (
						<CardSm activeOpacity={0.7} onPress={() => null}>
							<Banner source={Images.TRAINING_ONE} />
							<CardContent
								style={{
									marginTop: -10,
								}}
							>
								<HeaderStart>
									<Badge>
										<BadgeText
											fontSize={11}
											color="$black"
											fontFamily="OpenSans-Medium"
											textTransform="capitalize"
											allowFontScaling={false}
										>
											{item.exercise}
										</BadgeText>
									</Badge>
								</HeaderStart>

								<CardTitleSm allowFontScaling={false}>{item.days}</CardTitleSm>
								{/* <CardDescription>Um treino de costas completo</CardDescription> */}
								<CardFooter>
									<CardTextRow>
										<ClockIcon color="#ccff00" size="2xs" />
										<CardText allowFontScaling={false}>16 minutos</CardText>
									</CardTextRow>
									<AnimatedCircularProgress
										size={32}
										width={4}
										fill={44}
										tintColor="#ccff00"
										onAnimationComplete={() => null}
										backgroundColor="#585958"
									>
										{(fill) => <Value allowFontScaling={false}>{fill}%</Value>}
									</AnimatedCircularProgress>
								</CardFooter>
							</CardContent>
						</CardSm>
					)}
				/>
				<Heading allowFontScaling={false}>Dicas e recomendações</Heading>
				<HList
					horizontal
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }: any) => (
						<CardSm activeOpacity={0.7} onPress={() => null}>
							<Banner source={Images.TRAINING_ONE} />
							<CardContent
								style={{
									marginTop: -10,
								}}
							>
								<HeaderStart>
									<Badge>
										<BadgeText
											fontSize={11}
											color="$black"
											fontFamily="OpenSans-Medium"
											textTransform="capitalize"
											allowFontScaling={false}
										>
											{item.exercise}
										</BadgeText>
									</Badge>
								</HeaderStart>
								<CardTitleSm allowFontScaling={false}>{item.days}</CardTitleSm>
								{/* <CardDescription>Um treino de costas completo</CardDescription> */}
								<CardFooter>
									<CardTextRow>
										<ClockIcon color="#ccff00" size="2xs" />
										<CardText allowFontScaling={false}>16 minutos</CardText>
									</CardTextRow>
									<AnimatedCircularProgress
										size={32}
										width={4}
										fill={44}
										tintColor="#ccff00"
										onAnimationComplete={() => null}
										backgroundColor="#585958"
									>
										{(fill) => <Value allowFontScaling={false}>{fill}%</Value>}
									</AnimatedCircularProgress>
								</CardFooter>
							</CardContent>
						</CardSm>
					)}
				/>
			</Container>
		</AppTemplate>
	)
}

export default HomeView
