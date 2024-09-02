import React, { useLayoutEffect, useState } from 'react'
import { Vibration, Alert } from 'react-native'
import { AppTemplate } from 'components/templates'
import { propsNavigationStack } from 'routes/models/stack-models'
import { InfoIcon, LockIcon, UnlockIcon } from '@gluestack-ui/themed'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import YouTubeVideo from './components/YoutubeVideo' // Importação do componente YouTubeVideo
import { Actions, CircleText, CircleWhite, Container, Texts, Title, Warning, FeedbackButton } from './styles'

// Definindo a tipagem para o route
type WorkRoomRouteProp = RouteProp<propsNavigationStack, 'WorkRoom'>

const WorkRoomView: React.FC = () => {
	// Obtendo os parâmetros passados via navegação
	const route = useRoute<WorkRoomRouteProp>()
	const { title, series, repetitions, videoId, onComplete } = route.params

	// Obtenção da função de navegação
	const navigation = useNavigation()

	const [locked, setLocked] = useState(false)
	const [exerciseCompleted, setExerciseCompleted] = useState(false) // Estado para verificar se o exercício foi finalizado
	const [feedbackGiven, setFeedbackGiven] = useState(false) // Estado para verificar se o feedback foi dado
	const [feedback, setFeedback] = useState('') // Estado para armazenar o feedback do aluno

	// Alterando o título da stack com base no título do exercício
	useLayoutEffect(() => {
		navigation.setOptions({
			title, // Define o título da barra de navegação como o título do exercício
		})
	}, [navigation, title])

	const handleLock = () => {
		Vibration.vibrate(200)
		setLocked(!locked)
	}

	// Função para finalizar o exercício e solicitar feedback
	const handleCompleteExercise = () => {
		Alert.alert(
			'Exercício Finalizado🎉',
			'Você finalizou o exercício. Por favor, avalie a dificuldade.',
			[
				{
					text: 'Fácil',
					onPress: () => handleFeedback('Fácil'),
				},
				{
					text: 'Moderado',
					onPress: () => handleFeedback('Moderado'),
				},
				{
					text: 'Difícil',
					onPress: () => handleFeedback('Difícil'),
				},
			],
			{ cancelable: true }
		)
		setExerciseCompleted(true)
	}

	// Função para capturar o feedback do aluno e armazená-lo no estado
	const handleFeedback = (difficulty: string) => {
		setFeedback(difficulty)
		setFeedbackGiven(true)

		// Chama o callback para marcar o exercício como concluído
		onComplete?.()

		navigation.goBack()
	}
	return (
		<AppTemplate>
			<Container>
				{/* Renderizar o vídeo do YouTube baseado no videoId passado */}
				<YouTubeVideo videoId="qMsJCSw0rIE" />
				<Texts>
					<Title>{title}</Title>
				</Texts>

				{/* Botão para finalizar o exercício */}
				{!exerciseCompleted ? (
					<FeedbackButton onPress={handleCompleteExercise}>
						<CircleText>Finalizar Exercício</CircleText>
					</FeedbackButton>
				) : feedbackGiven ? (
					<CircleText
						style={{
							marginTop: 32,
						}}
					>
						Você classificou o treino como: {feedback}
					</CircleText>
				) : (
					<CircleText
						style={{
							marginTop: 32,
						}}
					>
						Aguardando feedback...
					</CircleText>
				)}

				<Actions>
					<CircleWhite>
						<CircleText>{`${series} séries`}</CircleText>
					</CircleWhite>

					<CircleWhite>
						<CircleText>{`${repetitions} reps`}</CircleText>
					</CircleWhite>
				</Actions>
			</Container>
		</AppTemplate>
	)
}

export default WorkRoomView
