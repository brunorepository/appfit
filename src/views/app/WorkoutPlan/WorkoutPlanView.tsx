import React, { useState, useEffect, useCallback } from 'react'
import { Alert, Text } from 'react-native'
import { ButtonLg } from 'components/core'
import { propsNavigationStack, propsStack } from 'routes/models/stack-models'
import ResultModal from 'views/app/WorkoutPlan/components/Result'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RouteProp, useNavigation } from '@react-navigation/native'
import ProgressCard from './components/ProgressCard'
import Work from './components/Work'
import { Container, FooterButtonContainer, ListEmptyText, ScrollCustomized } from './styles'

type WorkoutPlanRouteProp = RouteProp<propsNavigationStack, 'WorkoutPlan'>

interface WorkoutPlanProps {
	route: WorkoutPlanRouteProp
}

interface Exercise {
	id: string
	name: string
	secondTitle: string
	series: number
	repetitions: number
	thumbnail: string
	secondExercise?: string
	secondSeries?: string
	secondRepetitions?: string
	video: string
}

const WorkoutPlanView: React.FC<WorkoutPlanProps> = ({ route }) => {
	const { exercises, workoutType } = route.params
	const navigation = useNavigation<propsStack>()

	const [isTimerRunning, setIsTimerRunning] = useState(false)
	const [secondsElapsed, setSecondsElapsed] = useState(0)
	const [completedExercises, setCompletedExercises] = useState<{ [key: string]: boolean }>({})
	const [isResultModalVisible, setIsResultModalVisible] = useState(false)
	const [isButtonVisible, setIsButtonVisible] = useState(false)
	const [startTime, setStartTime] = useState<Date | null>(null) // Horário de início do treino
	const [endTime, setEndTime] = useState<Date | null>(null) // Horário de finalização do treino
	const [difficulty, setDifficulty] = useState<string | null>(null) // Dificuldade selecionada

	const handleCompleteExercise = (exerciseName: string) => {
		setCompletedExercises((prevState) => ({
			...prevState,
			[exerciseName]: true,
		}))
	}

	const calculateCompletionPercentage = useCallback(() => {
		const totalExercises = exercises.length
		const completedCount = Object.keys(completedExercises).filter((name) => completedExercises[name]).length
		return totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0
	}, [completedExercises, exercises.length])

	useEffect(() => {
		const completionPercentage = calculateCompletionPercentage()
		setIsButtonVisible(completionPercentage === 100)
	}, [completedExercises, calculateCompletionPercentage])

	useEffect(() => {
		let interval: NodeJS.Timeout | undefined

		if (isTimerRunning) {
			interval = setInterval(() => {
				setSecondsElapsed((prevSeconds) => prevSeconds + 1)
			}, 1000)
		} else if (!isTimerRunning && secondsElapsed !== 0) {
			clearInterval(interval)
		}

		return () => clearInterval(interval)
	}, [isTimerRunning, secondsElapsed])

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
	}

	const startTimer = () => {
		if (!isTimerRunning) {
			setIsTimerRunning(true)
			setStartTime(new Date()) // Salva o horário de início do treino
		}
	}

	const handleFinishWorkout = async () => {
		setIsTimerRunning(false)
		setIsButtonVisible(false)
		const endTime = new Date() // Salva o horário de finalização do treino
		setEndTime(endTime)
		setIsResultModalVisible(true) // Exibe o modal para o usuário selecionar a dificuldade
	}

	const handleGeneralFeedback = async (selectedDifficulty: string) => {
		setDifficulty(selectedDifficulty) // Salva a dificuldade escolhida

		// Obter o dia da semana
		const daysOfWeek = [
			'Domingo',
			'Segunda-feira',
			'Terça-feira',
			'Quarta-feira',
			'Quinta-feira',
			'Sexta-feira',
			'Sábado',
		]
		const workoutDate = new Date()
		const dayOfWeek = daysOfWeek[workoutDate.getDay()]

		// Cria o relatório com as informações do treino, incluindo o dia da semana
		const report = {
			difficulty: selectedDifficulty,
			startTime: startTime?.toISOString() || '',
			endTime: endTime?.toISOString() || '',
			exerciseCount: exercises.length,
			workoutDate: workoutDate.toISOString(),
			dayOfWeek, // Salva o dia da semana
		}

		try {
			const savedReports = await AsyncStorage.getItem('reports')
			const reports = savedReports ? JSON.parse(savedReports) : []
			reports.push(report)
			await AsyncStorage.setItem('reports', JSON.stringify(reports))
			console.log('Relatório salvo com sucesso:', report)
		} catch (error) {
			console.error('Erro ao salvar o relatório:', error)
		}
	}

	const handleAttemptFinishWorkout = () => {
		const completionPercentage = calculateCompletionPercentage()

		if (completionPercentage < 100) {
			Alert.alert(
				'Treino incompleto',
				'Você ainda não concluiu o treino. Deseja realmente finalizar?',
				[
					{
						text: 'Cancelar',
						style: 'cancel',
					},
					{
						text: 'Finalizar',
						onPress: handleFinishWorkout,
					},
				],
				{ cancelable: false }
			)
		} else {
			handleFinishWorkout()
		}
	}

	const handleNavigateToWorkoutRoom = (exercise: Exercise) => {
		if (!completedExercises[exercise.name]) {
			startTimer()
			navigation.navigate('WorkRoom', {
				title: exercise.name,
				series: String(exercise.series),
				repetitions: String(exercise.repetitions),
				secondTitle: String(exercise.secondExercise),
				secondSeries: String(exercise.secondSeries),
				secondRepetitions: exercise.secondRepetitions,
				thumbnail: exercise.thumbnail,
				videoId: exercise.video,
				onComplete: (name: string) => handleCompleteExercise(name),
			})
		}
	}

	return (
		<>
			<ScrollCustomized>
				<Container>
					{isResultModalVisible && (
						<ResultModal
							selectedDifficulty={difficulty}
							onClose={() => setIsResultModalVisible(false)}
							onSelectDifficulty={handleGeneralFeedback}
							onViewReport={() => {
								// Passar as informações para a tela de relatórios
								navigation.navigate('Charts')
								setIsResultModalVisible(false)
							}}
						/>
					)}

					<ProgressCard
						fill={calculateCompletionPercentage()}
						title={workoutType}
						timeElapsed={formatTime(secondsElapsed)}
					/>

					{exercises.length > 0 ? (
						exercises.map((exercise: Exercise) => (
							<Work
								key={exercise.id}
								title={exercise.name}
								instructions={`${exercise.name}: ${exercise.series} séries de ${exercise.repetitions} repetições`}
								uri={exercise.thumbnail}
								onPress={() => handleNavigateToWorkoutRoom(exercise)}
								checked={completedExercises[exercise.name] === true}
								secondTitle={exercise.secondExercise}
								secondInstructions={
									exercise.secondExercise
										? `${exercise.secondExercise}: ${exercise.secondSeries} séries de ${exercise.secondRepetitions} repetições`
										: undefined
								}
							/>
						))
					) : (
						<ListEmptyText>Sem exercícios para exibir.</ListEmptyText>
					)}
				</Container>
			</ScrollCustomized>

			{isButtonVisible && (
				<FooterButtonContainer>
					<ButtonLg onPress={handleAttemptFinishWorkout}>Finalizar o treino</ButtonLg>
				</FooterButtonContainer>
			)}
		</>
	)
}

export default WorkoutPlanView
