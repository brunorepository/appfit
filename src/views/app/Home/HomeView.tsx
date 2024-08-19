import React, { useContext } from 'react'
import { AppTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from 'src/contexts/AuthContext' // Importa o contexto de autenticação
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
	Description,
} from './styles'
import { Button } from 'react-native'
import { AnamneseIcon } from 'components/icons'

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
	// Mais itens de exemplo aqui
]

const HomeView: React.FC = () => {
	const navigation = useNavigation<propsStack>()
	const { user } = useContext(AuthContext) // Obtém o contexto do usuário autenticado

	console.log('Usuário: ' + JSON.stringify(user.haveAnamnese))

	if (!user.haveAnamnese) {
		return (
			<AppTemplate>
				<Container
					style={{
						marginTop: 32,
					}}
				>
					<AnamneseIcon width={170} height={200} />
					<CardTitle
						style={{
							textAlign: 'center',
						}}
					>
						Preencha sua ficha de anamnese para acessar seus treinos
					</CardTitle>
					<Description>
						Nossa equipe vai análisar sua ficha de anamnese e preparar seu plano de treinos ainda hoje.
					</Description>
					<Button
						title="Preencher ficha de anamnese"
						color={'#0ED907'}
						onPress={() => navigation.navigate('Anamnese')}
					/>
				</Container>
			</AppTemplate>
		)
	}

	return (
		<AppTemplate>
			<Container>
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
					// renderItem={({ item }: any) => (
					// 	<CardSm activeOpacity={0.7} onPress={() => navigation.navigate('WorkoutPlan')}>
					// 		<BannerSm source={{ uri: item.source.uri }} />
					// 		<CardContent style={{ marginTop: -140 }}>
					// 			<HeaderStart>
					// 				<Badge>
					// 					<BadgeText
					// 						fontSize={16}
					// 						color="$black"
					// 						fontFamily="OpenSans-Medium"
					// 						textTransform="capitalize"
					// 						allowFontScaling={false}
					// 					>
					// 						🏋️‍♀️ {item.exercise}
					// 					</BadgeText>
					// 				</Badge>
					// 			</HeaderStart>
					// 			<CardTitleSm allowFontScaling={false}>{item.days} 📅</CardTitleSm>
					// 			<CardDescription allowFontScaling={false}>Um treino</CardDescription>
					// 		</CardContent>
					// 	</CardSm>
					// )}
				/>
				<Heading allowFontScaling={false}>Treinos extras</Heading>
				<HList
					horizontal
					data={data}
					showsHorizontalScrollIndicator={false}
					// renderItem={({ item }: any) => (
					// 	<CardSm activeOpacity={0.7} onPress={() => null}>
					// 		<BannerSm source={{ uri: item.source.uri }} />
					// 		<CardContent style={{ marginTop: -140 }}>
					// 			<HeaderStart>
					// 				<Badge>
					// 					<BadgeText
					// 						fontSize={16}
					// 						color="$black"
					// 						fontFamily="OpenSans-Medium"
					// 						textTransform="capitalize"
					// 						allowFontScaling={false}
					// 					>
					// 						🏋️‍♀️ {item.exercise}
					// 					</BadgeText>
					// 				</Badge>
					// 			</HeaderStart>
					// 			<CardTitleSm allowFontScaling={false}>{item.days} 📅</CardTitleSm>
					// 			<CardDescription allowFontScaling={false}>Um treino</CardDescription>
					// 		</CardContent>
					// 	</CardSm>
					// )}
				/>
			</Container>
		</AppTemplate>
	)
}

export default HomeView
