import React, { useState, useEffect } from 'react'
import { Alert, Text, BackHandler } from 'react-native'
import { ButtonLg } from 'components/core'
import { propsNavigationStack, propsStack } from 'routes/models/stack-models'
import ResultModal from 'views/app/WorkoutPlan/components/Result'
import { RouteProp, useNavigation, useFocusEffect } from '@react-navigation/native'
import ProgressCard from './components/ProgressCard'
import Work from './components/Work'
import { Container, FooterButtonContainer, ScrollCustomized } from './styles'

type WorkoutPlanRouteProp = RouteProp<propsNavigationStack, 'WorkoutPlan'>

interface WorkoutPlanProps {
	route: WorkoutPlanRouteProp
}

interface Exercise {
	id: string
	name: string
	series: number
	repetitions: number
	thumbnail: string
}

const WorkoutPlanView: React.FC<WorkoutPlanProps> = ({ route }) => {
	const { exercises, workoutType } = route.params
	const navigation = useNavigation<propsStack>()

	const [isTimerRunning, setIsTimerRunning] = useState(false)
	const [secondsElapsed, setSecondsElapsed] = useState(0)
	const [completedExercises, setCompletedExercises] = useState<{ [key: string]: boolean }>({})
	const [isResultModalVisible, setIsResultModalVisible] = useState(false) // Modal começa fechado
	const [isButtonVisible, setIsButtonVisible] = useState(true) // Controle de visibilidade do botão

	const handleCompleteExercise = (exerciseId: string) => {
		setCompletedExercises((prevState) => ({
			...prevState,
			[exerciseId]: true,
		}))
	}

	const calculateCompletionPercentage = () => {
		const totalExercises = exercises.length
		const completedCount = Object.keys(completedExercises).filter((id) => completedExercises[id]).length
		return totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0
	}

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
		}
	}

	const handleFinishWorkout = () => {
		setIsTimerRunning(false)
		setIsResultModalVisible(true) // Mostra o modal quando o treino é finalizado
		setIsButtonVisible(false) // Remove o botão quando o treino é finalizado
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
		startTimer()
		navigation.navigate('WorkRoom', {
			title: exercise.name,
			series: exercise.series,
			repetitions: exercise.repetitions,
			thumbnail: exercise.thumbnail,
			onComplete: () => handleCompleteExercise(exercise.id),
		})
	}

	useFocusEffect(
		React.useCallback(() => {
			const onBackPress = () => {
				if (calculateCompletionPercentage() < 100) {
					Alert.alert(
						'Sair sem finalizar?',
						'Você ainda não concluiu o treino. Deseja realmente sair?',
						[
							{
								text: 'Cancelar',
								onPress: () => null,
								style: 'cancel',
							},
							{
								text: 'Sair',
								onPress: () => navigation.goBack(),
							},
						],
						{ cancelable: false }
					)
					return true
				}
				return false
			}

			BackHandler.addEventListener('hardwareBackPress', onBackPress)

			return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
		}, [calculateCompletionPercentage, navigation])
	)

	return (
		<>
			<ScrollCustomized>
				<Container>
					{/* Modal só aparece quando o treino é finalizado */}
					{isResultModalVisible && (
						<ResultModal
							onClose={() => setIsResultModalVisible(false)} // Permite fechar o modal
							onViewReport={() => {
								setIsResultModalVisible(false)
								navigation.navigate('Charts')
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
								instructions={`${exercise.series} séries de ${exercise.repetitions} repetições`}
								uri={exercise.thumbnail}
								onPress={() => handleNavigateToWorkoutRoom(exercise)}
								checked={completedExercises[exercise.id] === true}
							/>
						))
					) : (
						<Text>Sem exercícios para exibir.</Text>
					)}
				</Container>
			</ScrollCustomized>

			{/* Botão aparece apenas quando o modal não está visível e o botão é visível */}
			{isButtonVisible && (
				<FooterButtonContainer>
					<ButtonLg onPress={handleAttemptFinishWorkout}>
						{isTimerRunning ? 'Finalizar treino' : 'Iniciar treino'}
					</ButtonLg>
				</FooterButtonContainer>
			)}
		</>
	)
}

export default WorkoutPlanView
