import React, { ReactNode } from 'react'
import { Button, Text } from './styles'

type ButtonLgProps = {
	children?: ReactNode
	onPress: () => void
}

const ButtonLg: React.FC<ButtonLgProps> = ({ children, onPress }) => {
	return (
		<Button activeOpacity={0.8} onPress={onPress}>
			<Text>{children || 'Entrar'}</Text>
		</Button>
	)
}

export default ButtonLg
