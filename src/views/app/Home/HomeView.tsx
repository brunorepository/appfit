import React from 'react'
import { AppTemplate } from 'components/templates'
// import { propsStack } from 'routes/models/stack-models'
import { Images } from 'src/adapters/constants'
import { Badge, BadgeText, ClockIcon, ExternalLinkIcon } from '@gluestack-ui/themed'
// import { useNavigation } from '@react-navigation/native'
import {
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
	HList,
	Heading,
	Objective,
	Title,
	TitleYellow,
	Touchable,
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
	// const navigation = useNavigation<propsStack>()

	return (
		<AppTemplate>
			<Container colors={['#1c1c1e', '#262525', '#0e0d0d']}>
				<Objective>Segunda-feira, 12 de fevereiro de 2024</Objective>
				<Title>
					Olá <TitleYellow>Cid!</TitleYellow> Vamos lá! Tenha um treino incrível! 💪
				</Title>
				<Touchable activeOpacity={0.7} onPress={() => null}>
					<Card
						imageStyle={{
							borderRadius: 10,
							borderWidth: 2,
							borderColor: '#ccff00',
							opacity: 0.4,
						}}
						source={Images.TRAINING_ONE}
					>
						<CardContent>
							<Badge
								justifyContent="center"
								alignItems="center"
								maxWidth={75}
								bgColor="$backgroundLightWarning"
								mb={4}
								borderRadius={5}
								mt={6}
							>
								<BadgeText color="$black" fontFamily="OpenSans-Medium" textTransform="capitalize">
									1 semana
								</BadgeText>
							</Badge>
							<Badge
								justifyContent="flex-start"
								alignItems="flex-start"
								maxWidth={115}
								bgColor="#ccff00"
								borderRadius={5}
								mb={3}
								mt={3}
							>
								<BadgeText color="$black" fontFamily="OpenSans-Medium" textTransform="capitalize">
									Seu plano pessoal
								</BadgeText>
							</Badge>

							<CardTitle>Força em todo o corpo</CardTitle>
							<CardDescription>
								Um treino de corpo inteiro ataca todos os principais músculos com exercícios compostos e
								isolados, incluindo aquecimento e alongamento.
							</CardDescription>

							<CardFooter>
								<CardTextRow>
									<ClockIcon color="#ccff00" size="2xs" />
									<CardText>10 minutos</CardText>
								</CardTextRow>
								<CardTextRow>
									<ExternalLinkIcon color="#ccff00" size="2xs" />
									<CardText>Força</CardText>
								</CardTextRow>
							</CardFooter>
						</CardContent>
					</Card>
				</Touchable>

				<Heading>Treinos da semana</Heading>
				<HList
					horizontal
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }: any) => (
						<CardSm
							source={Images.TRAINING_TWO}
							imageStyle={{
								borderWidth: 2,
								borderColor: '#ccff00',
								borderRadius: 10,
								opacity: 0.4,
							}}
						>
							<CardContent>
								<Badge
									justifyContent="flex-start"
									alignItems="flex-start"
									maxWidth={54}
									bgColor="#ccff00"
									borderRadius={5}
									mt={3}
								>
									<BadgeText color="$black" fontFamily="OpenSans-Medium" textTransform="capitalize">
										{item.exercise}
									</BadgeText>
								</Badge>
								<CardTitleSm>{item.days}</CardTitleSm>
								{/* <CardDescription>Um treino de costas completo</CardDescription> */}
								<CardFooter>
									<CardTextRow>
										<ClockIcon color="#ccff00" size="2xs" />
										<CardText>16 minutos</CardText>
									</CardTextRow>
								</CardFooter>
							</CardContent>
						</CardSm>
					)}
				/>
				<Heading>Dicas e recomendações</Heading>

				<HList
					horizontal
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }: any) => (
						<CardSm
							source={Images.TRAINING_TREE}
							imageStyle={{
								borderWidth: 2,
								borderColor: '#ccff00',
								borderRadius: 10,
								opacity: 0.4,
							}}
						>
							<CardContent>
								<Badge
									justifyContent="flex-start"
									alignItems="flex-start"
									maxWidth={54}
									bgColor="$backgroundDark0"
									borderRadius={5}
									mb={3}
									mt={3}
								>
									<BadgeText
										alignSelf="flex-start"
										color="$black"
										fontFamily="OpenSans-Medium"
										textTransform="capitalize"
									>
										{item.exercise}
									</BadgeText>
								</Badge>
								<CardTitleSm>{item.days}</CardTitleSm>
							</CardContent>
						</CardSm>
					)}
				/>
			</Container>
		</AppTemplate>
	)
}

export default HomeView
