import React from 'react'
import { CheckedIcon } from 'components/icons'
import { Exercise, Instructions, Start, Texts, Thumb, Title } from './styles'

type WorkProps = {
	title: string
	instructions: string
	uri: string // Base64 ou URL de imagem
	onPress: () => void
	checked: boolean
}

const Work: React.FC<WorkProps> = ({ title, instructions, uri, onPress, checked }) => {
	return (
		<Exercise activeOpacity={0.8} onPress={onPress}>
			<Start>
				<Thumb
					source={{ uri: `data:image/jpeg;base64,${uri}` }} // Independentemente de ser base64 ou URL, o formato é o mesmo
				/>
				<Texts>
					<Title>{title}</Title>
					<Instructions>{instructions}</Instructions>
				</Texts>
			</Start>
			{checked && <CheckedIcon />}
		</Exercise>
	)
}

export default Work
