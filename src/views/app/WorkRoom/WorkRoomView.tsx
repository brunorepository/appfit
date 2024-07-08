import React from 'react'
import { Vibration } from 'react-native'
import { InputValue } from 'components/forms'
import { AppTemplate } from 'components/templates'
import { InfoIcon, LockIcon, UnlockIcon } from '@gluestack-ui/themed'
import Video from './components/Video'
import { Actions, CircleText, CircleWhite, CircleYellow, Container, Texts, Title, Warning } from './styles'

const WorkRoomView: React.FC = () => {
	const [locked, setLocked] = React.useState(false)

	const handleLock = () => {
		Vibration.vibrate(200)
		setLocked(!locked)
	}

	return (
		<AppTemplate>
			<Container>
				<Video />
				<Texts>
					<Title>Remada máquina unilateral</Title>
				</Texts>
				<Texts>
					<Warning>
						Peso recomendado: 10kg para cada braço <InfoIcon color="#0ED907" />
					</Warning>
				</Texts>
				<Actions>
					<CircleWhite>
						<CircleText>N/A</CircleText>
					</CircleWhite>

					<CircleYellow activeOpacity={0.8} onPress={handleLock} showBorder={locked}>
						{locked ? <LockIcon size="xl" color="#0ED907" /> : <UnlockIcon size="xl" color="#ffff" />}
					</CircleYellow>

					<CircleWhite>
						<CircleText>5/20</CircleText>
					</CircleWhite>
				</Actions>
				<InputValue value="" onChangeText={() => null} />
			</Container>
		</AppTemplate>
	)
}

export default WorkRoomView
