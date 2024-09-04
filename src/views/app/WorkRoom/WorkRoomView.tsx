import React, { useLayoutEffect, useState } from 'react'
import { Switch } from 'react-native'
import { AppTemplate } from 'components/templates'
import { propsNavigationStack } from 'routes/models/stack-models'
import YouTubeVideo from 'views/app/WorkRoom/components/YoutubeVideo'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import {
	Actions,
	CircleText,
	CircleWhite,
	Container,
	Texts,
	Title,
	FeedbackButton,
	Row,
	ExtraVideoText,
} from './styles'

type WorkRoomRouteProp = RouteProp<propsNavigationStack, 'WorkRoom'>

const WorkRoomView: React.FC = () => {
	const [isExtraVideo, setIsExtraVideo] = useState(false)

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
		extraVideoId, // Video extra para alternar
	} = route.params

	const navigation = useNavigation()

	// Definir título da tela com base nos vídeos
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

	// Alternar entre o vídeo principal e o extra
	const toggleSwitch = () => setIsExtraVideo((previousState) => !previousState)

	return (
		<AppTemplate>
			<Container>
				{/* Exibir o vídeo com base no estado do switch */}
				<YouTubeVideo videoId={isExtraVideo && extraVideoId ? extraVideoId : videoId} />

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
					{extraVideoId && (
						<Row>
							<ExtraVideoText>{isExtraVideo ? 'Vídeo Extra' : 'Vídeo Principal'}</ExtraVideoText>
							<Switch
								trackColor={{ false: '#323232', true: '#323232' }}
								thumbColor={isExtraVideo ? '#0ed907' : '#f4f3f4'}
								ios_backgroundColor="#3e3e3e"
								onValueChange={toggleSwitch}
								value={isExtraVideo}
							/>
						</Row>
					)}
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
