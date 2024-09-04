import React, { useState, useCallback, useEffect } from 'react'
import { Button, RefreshControl, ScrollView, Alert } from 'react-native'
import Clock from 'react-native-vector-icons/Ionicons'
import { AnamneseIcon } from 'components/icons'
import { AppTemplate } from 'components/templates'
import { propsStack } from 'routes/models/stack-models'
import axiosInstance from 'src/adapters/services/api'
import { useAuth } from 'src/contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'
import {
	Banner,
	Card,
	CardContent,
	CardTitle,
	Container,
	HList,
	Heading,
	BadgeText,
	Badge,
	HeaderStart,
	BannerSm,
	CardSm,
	Description,
	Instructions,
	HeaderContainer,
	HeaderPhrase,
} from './styles'

interface Workout {
	title: string
	uri: string
	exercises: any[]
	workoutDate: string // Data do treino
}

interface Anamnese {
	trainingDaysPerWeek: number // Quantidade de dias que o aluno treina por semana
}

const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']

const HomeView: React.FC = () => {
	const navigation = useNavigation<propsStack>()
	const { user } = useAuth()

	const [refreshing, setRefreshing] = useState(false)
	const [workouts, setWorkouts] = useState<Workout[]>([])
	const [anamnese, setAnamnese] = useState<Anamnese | null>(null)
	const [loading, setLoading] = useState(true)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const motivationalQuotes = [
		'A única maneira de fazer um ótimo trabalho é amar o que você faz. - Steve Jobs',
		'Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo. - Zig Ziglar',
		'O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier',
		'A dor que você sente hoje será a força que você sentirá amanhã. - Arnold Schwarzenegger',
		'O corpo conquista o que a mente acredita. - Anônimo',
		'Transforme suas metas em conquistas. - Anônimo',
		'Não pare quando estiver cansado. Pare quando estiver terminado. - Anônimo',
		'Você é mais forte do que pensa. - Anônimo',
		'A jornada de mil milhas começa com um único passo. - Lao Tzu',
		'O único lugar onde o sucesso vem antes do trabalho é no dicionário. - Vidal Sassoon',
		'Seu corpo pode quase tudo. É sua mente que você precisa convencer. - Anônimo',
		'O sucesso não é definitivo, o fracasso não é fatal: é a coragem de continuar que conta. - Winston Churchill',
		'O único limite para o seu impacto é a sua imaginação e compromisso. - Tony Robbins',
		'A dor é temporária. Desistir é para sempre. - Lance Armstrong',
		'Se você quer algo que nunca teve, você precisa fazer algo que nunca fez. - Thomas Jefferson',
		'Você é o único responsável por quão longe você vai. - Anônimo',
		'Sonhos não funcionam a menos que você faça. - John C. Maxwell',
		'O que você faz hoje pode melhorar todos os seus amanhãs. - Ralph Marston',
		'A diferença entre o impossível e o possível está na determinação. - Tommy Lasorda',
		'A melhor maneira de prever o futuro é criá-lo. - Peter Drucker',
		'Corra quando puder, ande se precisar, rasteje se for necessário; mas nunca desista. - Dean Karnazes',
		'Não é sobre o quão ruim você quer. É sobre o quão duro você está disposto a trabalhar para isso. - Anônimo',
		'O que não nos mata nos fortalece. - Friedrich Nietzsche',
		'Hoje eu farei o que os outros não farão, para amanhã fazer o que os outros não podem. - Jerry Rice',
		'Não há elevador para o sucesso. Você tem que subir as escadas. - Zig Ziglar',
		'Força não vem da capacidade física. Ela vem de uma vontade indomável. - Mahatma Gandhi',
	]

	const [randomQuote, setRandomQuote] = useState<string>('')

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
		setRandomQuote(motivationalQuotes[randomIndex])
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchAnamnese = useCallback(async () => {
		try {
			setLoading(true)
			// eslint-disable-next-line no-underscore-dangle
			const response = await axiosInstance.get(`/buyer/anamnese/${user._id}`)
			if (response.status === 200) {
				const anamneseData = response.data.anamnese
				setAnamnese(anamneseData)
			}
		} catch (error) {
			Alert.alert('Erro', 'Não foi possível carregar a anamnese do aluno.')
		} finally {
			setLoading(false)
		}
		// eslint-disable-next-line no-underscore-dangle
	}, [user._id])

	const fetchWorkouts = useCallback(async () => {
		try {
			setLoading(true)
			// eslint-disable-next-line no-underscore-dangle
			const response = await axiosInstance.get(`/update/current/workouts/${user._id}`)
			setWorkouts(response.data.workouts || [])
		} catch (error) {
			Alert.alert('Erro', 'Não foi possível carregar os treinos do aluno.')
		} finally {
			setLoading(false)
		}
		// eslint-disable-next-line no-underscore-dangle
	}, [user._id])

	useEffect(() => {
		fetchAnamnese()
		fetchWorkouts()
	}, [fetchAnamnese, fetchWorkouts])

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		fetchWorkouts()
		fetchAnamnese()
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [fetchWorkouts, fetchAnamnese])

	const organizeWorkoutsByDay = (): (Workout | null)[] => {
		if (!anamnese) return []

		// Quantidade de dias que o aluno treina por semana
		const trainingDays = anamnese.trainingDaysPerWeek
		const organizedWorkouts: (Workout | null)[] = Array(7).fill(null)

		// Organizamos os treinos de forma sequencial, ignorando as datas por agora
		workouts.forEach((workout, index) => {
			// Distribuímos os treinos nos primeiros 'trainingDays' da semana (de segunda a domingo)
			if (index < trainingDays) {
				organizedWorkouts[index] = workout // Coloca o treino no índice correto da semana
			}
		})

		return organizedWorkouts
	}

	const getTodayWorkout = (): Workout | null => {
		const today = new Date()
		let dayOfWeek = today.getDay()
		dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek // Ajuste para que domingo seja 7

		const organizedWorkouts = organizeWorkoutsByDay()
		// Certifica-se que o treino de hoje está dentro dos dias de treino configurados
		if (anamnese && dayOfWeek <= anamnese.trainingDaysPerWeek) {
			return organizedWorkouts[dayOfWeek - 1] // Retorna o treino do dia
		}
		return null // Caso não tenha treino hoje
	}

	if (loading) {
		return (
			<AppTemplate>
				<Container
					style={{
						marginTop: 32,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Clock name="time" size={70} color="#0ED907" />
					<CardTitle style={{ textAlign: 'center', marginTop: 20 }}>Carregando seus treinos...</CardTitle>
				</Container>
			</AppTemplate>
		)
	}

	if (!user.haveAnamnese) {
		return (
			<AppTemplate>
				<Container style={{ marginTop: 32 }}>
					<AnamneseIcon width={170} height={200} />
					<CardTitle style={{ textAlign: 'center' }}>
						Preencha sua ficha de anamnese para acessar seus treinos
					</CardTitle>
					<Description>
						Nossa equipe vai analisar sua ficha de anamnese e preparar seu plano de treinos ainda hoje.
					</Description>
					<Button
						title="Preencher ficha de anamnese"
						color="#0ED907"
						onPress={() => navigation.navigate('Anamnese')}
					/>
				</Container>
			</AppTemplate>
		)
	}

	if (!anamnese) {
		return (
			<AppTemplate>
				<Container style={{ marginTop: 32 }}>
					<CardTitle style={{ textAlign: 'center' }}>Carregando anamnese...</CardTitle>
				</Container>
			</AppTemplate>
		)
	}

	const todaysWorkout = getTodayWorkout()

	return (
		<AppTemplate>
			<HeaderContainer>
				<HeaderPhrase>{randomQuote}</HeaderPhrase>
			</HeaderContainer>
			<ScrollView
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#0ED907']} />}
			>
				<Container>
					{/* Treino do dia */}
					<Card
						activeOpacity={todaysWorkout ? 0.8 : 1}
						onPress={() =>
							todaysWorkout &&
							navigation.navigate('WorkoutPlan', {
								workoutType: todaysWorkout.title,
								exercises: todaysWorkout.exercises || [],
							})
						}
						style={{
							backgroundColor: todaysWorkout ? '#1c1c1e' : '#323232',
							opacity: todaysWorkout ? 1 : 0.4,
						}}
					>
						<Banner
							imageStyle={{
								borderTopLeftRadius: 10,
								borderTopRightRadius: 10,
							}}
							source={
								!todaysWorkout?.uri
									? require('src/adapters/assets/images/logo.png')
									: { uri: `data:image/jpeg;base64,${todaysWorkout.uri}` }
							}
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
										📅 Hoje
									</BadgeText>
								</Badge>
							</HeaderStart>
							<CardTitle allowFontScaling={false}>{todaysWorkout?.title}</CardTitle>
							{todaysWorkout?.exercises.length !== 0 && (
								<Instructions>{todaysWorkout?.exercises.length} exercícios</Instructions>
							)}
						</CardContent>
					</Card>

					{/* Treinos da semana */}
					{workouts && workouts.length > 0 && (
						<>
							<Heading allowFontScaling={false}>Treinos da semana</Heading>
							<HList
								horizontal
								data={organizeWorkoutsByDay()} // Somente os treinos dentro do limite de trainingDaysPerWeek
								showsHorizontalScrollIndicator={false}
								// eslint-disable-next-line react/no-unused-prop-types
								renderItem={({ item, index }: { item: Workout | null; index: number }) => {
									const today = new Date()
									let todayDayOfWeek = today.getDay()
									todayDayOfWeek = todayDayOfWeek === 0 ? 7 : todayDayOfWeek
									const isPastWorkout = index + 1 < todayDayOfWeek

									return (
										<CardSm
											activeOpacity={item?.exercises.length ? 0.7 : 0.4}
											onPress={
												item?.exercises.length
													? () =>
															navigation.navigate('WorkoutPlan', {
																workoutType: item?.title,
																exercises: item?.exercises || [],
															})
													: () => null
											}
											customOpacity={
												item && item.exercises && item.exercises.length > 0 ? 1 : 0.4
											}
											style={{
												backgroundColor: isPastWorkout ? '#323232' : '#1c1c1e',
											}}
										>
											<BannerSm
												source={
													!item?.uri
														? require('src/adapters/assets/images/logo.png')
														: { uri: `data:image/jpeg;base64,${item.uri}` }
												}
											/>
											<CardContent>
												<HeaderStart>
													<Badge>
														<BadgeText
															fontSize={16}
															color="$black"
															fontFamily="OpenSans-Medium"
															textTransform="capitalize"
															allowFontScaling={false}
														>
															🏋️‍♀️ {daysOfWeek[index]}
														</BadgeText>
													</Badge>
												</HeaderStart>
												<CardTitle allowFontScaling={false}>
													{item?.title || 'Sem treino'}
												</CardTitle>
											</CardContent>
										</CardSm>
									)
								}}
							/>
						</>
					)}
				</Container>
			</ScrollView>
		</AppTemplate>
	)
}

export default HomeView
