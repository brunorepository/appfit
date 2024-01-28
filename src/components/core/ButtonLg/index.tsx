import React, { ReactNode } from 'react'
import { Button, Text } from './styles'

type ButtonLgProps = {
	children?: ReactNode
}

const ButtonLg: React.FC<ButtonLgProps> = ({ children }) => {
	return (
		<Button activeOpacity={0.8}>
			<Text>{children || 'Entrar'}</Text>
		</Button>
	)
}

export default ButtonLg
