import React from 'react'
import { Exercise, Instructions, SecondInstructions, Start, Texts, Thumb, Title } from './styles'

type WorkProps = {
	title: string
	instructions: string
	uri: string // Base64 ou URL de imagem
	onPress: () => void
	checked: boolean
	secondTitle: string
	secondInstructions: string
}

const Work: React.FC<WorkProps> = ({ title, instructions, uri, onPress, checked, secondTitle, secondInstructions }) => {
	return (
		<Exercise checked={checked} activeOpacity={0.8} onPress={onPress}>
			<Start>
				<Thumb
					source={{ uri: `data:image/jpeg;base64,${uri}` }} // Independentemente de ser base64 ou URL, o formato é o mesmo
				/>
				<Texts>
					<Title>
						{title} {secondTitle && '+'} {secondTitle}
					</Title>
					<Instructions>{instructions} </Instructions>
					<SecondInstructions>{secondInstructions}</SecondInstructions>
				</Texts>
			</Start>
		</Exercise>
	)
}

export default Work
