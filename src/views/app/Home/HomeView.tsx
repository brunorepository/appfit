import React, { useContext, useState, useCallback, useEffect } from 'react'
import { Button, RefreshControl, ScrollView, Alert } from 'react-native'
import Clock from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import { AnamneseIcon } from 'components/icons'
import { AppTemplate } from 'components/templates'

import { propsStack } from 'routes/models/stack-models'
import { AuthContext } from 'src/contexts/AuthContext'
import { EWorkoutProps } from 'src/types/Types'
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
} from './styles'

interface User {
	_id: string
	haveAnamnese: boolean
}

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
	const { user } = useContext(AuthContext) as { user: User }

	const [refreshing, setRefreshing] = useState(false)
	const [workouts, setWorkouts] = useState<Workout[]>([]) // Estado para armazenar os treinos do usuário
	const [anamnese, setAnamnese] = useState<Anamnese | null>(null) // Estado para armazenar a anamnese
	const [loading, setLoading] = useState(true) // Estado de carregamento

	// Função para buscar a anamnese do aluno
	const fetchAnamnese = useCallback(async () => {
		try {
			setLoading(true)
			// eslint-disable-next-line no-underscore-dangle
			const response = await axios.get(`https://hfit-backend.vercel.app/buyer/anamnese/${user._id}`)
			if (response.status === 200) {
				const anamneseData = response.data.anamnese

				// Armazena a quantidade de dias de treino por semana na anamnese
				setAnamnese({
					trainingDaysPerWeek: anamneseData.trainingDaysPerWeek,
				})
			}
		} catch (error) {
			Alert.alert('Erro', 'Não foi possível carregar a anamnese do aluno.')
		} finally {
			setLoading(false)
		}
		// eslint-disable-next-line no-underscore-dangle
	}, [user._id])

	// Função para buscar os treinos do aluno
	const fetchWorkouts = useCallback(async () => {
		try {
			setLoading(true)
			// eslint-disable-next-line no-underscore-dangle
			const response = await axios.get(`https://hfit-backend.vercel.app/update/current/workouts/${user._id}`)
			const fetchedWorkouts = response.data.workouts

			if (fetchedWorkouts && fetchedWorkouts.length > 0) {
				setWorkouts(fetchedWorkouts)
			} else {
				setWorkouts([])
			}
		} catch (error) {
			Alert.alert('Erro', 'Não foi possível carregar os treinos do aluno.')
		} finally {
			setLoading(false)
		}
		// eslint-disable-next-line no-underscore-dangle
	}, [user._id])

	useEffect(() => {
		// Chama ambas as funções ao montar o componente
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

	// Função para organizar os treinos por dia da semana com base na anamnese
	const organizeWorkoutsByDay = () => {
		const organizedWorkouts: (Workout | null)[] = Array(7).fill(null)

		workouts.forEach((workout) => {
			const workoutDate = new Date(workout.workoutDate)
			let dayOfWeek = workoutDate.getDay() // Obtemos o índice do dia (0 = domingo, 6 = sábado)

			// Ajusta o dia para começar na segunda-feira (1) e domingo (7)
			dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek // Ajusta domingo para ser o último dia da semana (7)

			organizedWorkouts[dayOfWeek - 1] = workout // Insere o treino no dia correto
		})

		return organizedWorkouts
	}

	// Função para pegar o treino do dia atual
	const getTodayWorkout = () => {
		const today = new Date()
		let dayOfWeek = today.getDay()

		// Ajusta domingo para ser o último dia da semana (7)
		dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek

		const organizedWorkouts = organizeWorkoutsByDay()
		return organizedWorkouts[dayOfWeek - 1] // Retorna o treino do dia atual
	}

	// Se estiver carregando, exiba um feedback visual
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

	// Caso o usuário não tenha anamnese preenchida
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

	// Se não houver anamnese carregada
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

	console.log(todaysWorkout?.title)

	return (
		<AppTemplate>
			<ScrollView
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#0ED907']} />}
			>
				<Container>
					{/* Treino do dia */}
					{todaysWorkout ? (
						<Card
							activeOpacity={0.8}
							onPress={() =>
								navigation.navigate('WorkoutPlan', {
									workoutType: todaysWorkout?.title,
									exercises: todaysWorkout?.exercises || [],
								})
							}
							style={{
								backgroundColor: todaysWorkout ? '#1c1c1e' : '#323232', // Cor customizada para o treino do dia
								opacity: todaysWorkout ? 1 : 0.4, // Ajusta opacidade para treinos anteriores
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
									<Instructions>
										{todaysWorkout?.exercises.length} exercício
										{todaysWorkout.exercises.length > 1 ? 's' : ''}
									</Instructions>
								)}
							</CardContent>
						</Card>
					) : (
						<CardTitle
							style={{
								marginTop: 12,
							}}
						>
							Não há treino para hoje.
						</CardTitle>
					)}

					{/* Treinos da semana com base nos dias de treino da anamnese */}
					{workouts && (
						<>
							<Heading allowFontScaling={false}>Treinos da semana</Heading>
							<HList
								horizontal
								data={organizeWorkoutsByDay().slice(0, anamnese.trainingDaysPerWeek)}
								showsHorizontalScrollIndicator={false}
								// eslint-disable-next-line react/no-unused-prop-types

								renderItem={({ item, index }: { item: Workout | null; index: number }) => {
									// Obtendo o dia atual da semana
									const today = new Date()
									let todayDayOfWeek = today.getDay()
									todayDayOfWeek = todayDayOfWeek === 0 ? 7 : todayDayOfWeek // Ajusta domingo para ser o último dia da semana (7)

									// Verifica se o dia do treino (index) é anterior ao dia atual
									const isPastWorkout = index + 1 < todayDayOfWeek // +1 porque o index começa de 0 e os dias da semana de 1

									return (
										<CardSm
											activeOpacity={isPastWorkout || !item ? 0.4 : 0.7} // 0.4 para dias passados ou sem treino, 0.7 para os demais
											onPress={
												isPastWorkout || !item
													? () => null
													: () => {
															// Lógica para navegar para o plano de treino ou ação desejada
															navigation.navigate('WorkoutPlan', {
																workoutType: item.title,
																exercises: item?.exercises || [], // Passa os exercícios se houver
															})
														}
											}
											customOpacity={isPastWorkout || !item ? 0.4 : 1}
											style={{
												backgroundColor: isPastWorkout ? '#323232' : '#1c1c1e', // Cinza para treinos passados, cor padrão para futuros
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
