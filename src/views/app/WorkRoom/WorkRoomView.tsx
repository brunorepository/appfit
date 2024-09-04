import React, { useLayoutEffect } from 'react'
import { AppTemplate } from 'components/templates'
import { propsNavigationStack } from 'routes/models/stack-models'
import YouTubeVideo from 'views/app/WorkRoom/components/YoutubeVideo'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import { Actions, CircleText, CircleWhite, Container, Texts, Title, FeedbackButton } from './styles'

type WorkRoomRouteProp = RouteProp<propsNavigationStack, 'WorkRoom'>

const WorkRoomView: React.FC = () => {
	const route = useRoute<WorkRoomRouteProp>()
	const {
		title,
		series,
		repetitions,
		videoId, // Este é o nome do vídeo conforme especificado no JSON
		onComplete,
		secondTitle,
		secondSeries,
		secondRepetitions,
	} = route.params

	const navigation = useNavigation()

	useLayoutEffect(() => {
		const navigationTitle =
			secondTitle && secondTitle.trim() !== 'undefined' && secondTitle.trim() !== ''
				? `${title} + ${secondTitle}`
				: title
		navigation.setOptions({
			title: navigationTitle,
		})
	}, [navigation, secondTitle, title])

	const handleCompleteExercise = () => {
		onComplete?.(title)
		navigation.goBack()
	}
	console.log(videoId)

	return (
		<AppTemplate>
			<Container>
				{/* Usando o mapeamento estático para obter o vídeo */}
				<YouTubeVideo videoId={videoId} />

				<Texts>
					<Title>
						{title}
						{secondTitle &&
							secondTitle.trim() !== 'undefined' &&
							secondTitle.trim() !== '' &&
							` + ${secondTitle}`}
					</Title>
				</Texts>

				<Actions>
					<CircleWhite>
						<CircleText>{`${series} séries`}</CircleText>
					</CircleWhite>

					<CircleWhite>
						<CircleText>{`${repetitions} reps`}</CircleText>
					</CircleWhite>
				</Actions>

				{secondTitle && secondSeries && secondRepetitions && (
					<CircleWhite>
						<CircleText>{`Extra: ${secondSeries} séries de ${secondRepetitions} reps - ${secondTitle}`}</CircleText>
					</CircleWhite>
				)}

				<FeedbackButton activeOpacity={0.8} onPress={handleCompleteExercise}>
					<CircleText>Concluir Exercício</CircleText>
				</FeedbackButton>
			</Container>
		</AppTemplate>
	)
}

export default WorkRoomView
