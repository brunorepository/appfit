import React from 'react'
import { Vibration } from 'react-native'
import { AppTemplate } from 'components/templates'
import { InfoIcon, LockIcon, UnlockIcon } from '@gluestack-ui/themed'
import Video from './components/Video'
import { Actions, CircleText, CircleWhite, CircleYellow, Container, Texts, Title, Warning } from './styles'

const WorkRoomView: React.FC = () => {
	const [locked, setLocked] = React.useState(false)

	const handleLock = () => {
		Vibration.vibrate(1000)
		setLocked(!locked)
	}

	return (
		<AppTemplate>
			<Container>
				<Video />
				<Texts>
					<Title>Elevação lateral e frontal com halteres em pé</Title>
				</Texts>
				<Texts>
					<Warning>
						Peso recomendado: 10kg para cada braço <InfoIcon color="#CCFF00" />
					</Warning>
				</Texts>
				<Actions>
					<CircleWhite>
						<CircleText>Não</CircleText>
					</CircleWhite>

					<CircleYellow activeOpacity={0.8} onPress={handleLock} showBorder={locked}>
						{locked ? <LockIcon size="xl" color="#CCFF00" /> : <UnlockIcon size="xl" color="#ffff" />}
					</CircleYellow>

					<CircleWhite>
						<CircleText>5/20</CircleText>
					</CircleWhite>
				</Actions>
			</Container>
		</AppTemplate>
	)
}

export default WorkRoomView
