import React from 'react'
import { CheckedIcon } from 'components/icons'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import { Exercise, Instructions, Start, Texts, Thumb, Title } from './styles'

type WorkProps = {
	title: string
	instructions: string
	video: string
}

const Work: React.FC<WorkProps> = ({ title, instructions, video }) => {
	const navigation = useNavigation<propsStack>()

	return (
		<Exercise activeOpacity={0.8} onPress={() => navigation.navigate('WorkRoom')}>
			<Start>
				<Thumb source={video} />
				<Texts>
					<Title>{title}</Title>
					<Instructions>{instructions}</Instructions>
				</Texts>
			</Start>
			<CheckedIcon />
		</Exercise>
	)
}

export default Work
