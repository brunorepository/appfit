import React from 'react'
import { CheckedIcon } from 'components/icons'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import { Exercise, Instructions, Start, Texts, Thumb, Title } from './styles'

const Work: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	return (
		<Exercise activeOpacity={0.8} onPress={() => navigation.navigate('WorkRoom')}>
			<Start>
				<Thumb
					source={{
						uri: 'https://i.ibb.co/6yZSnwZ/4234261-conceitos-de-exercicios-fisicos-vetor-removebg-preview.png',
					}}
				/>
				<Texts>
					<Title>Remada máquina unilateral</Title>
					<Instructions>25 min | 110 - 140 bpm</Instructions>
				</Texts>
			</Start>
			<CheckedIcon />
		</Exercise>
	)
}

export default Work
