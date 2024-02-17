import React, { ReactNode } from 'react'
import { DotIndicator } from 'react-native-indicators'
import { Button, Text } from './styles'

type ButtonLgProps = {
	children?: ReactNode
	onPress: () => void
	isLoading?: boolean
}

const ButtonLg: React.FC<ButtonLgProps> = ({ children, isLoading, onPress }) => {
	return (
		<Button activeOpacity={0.8} onPress={onPress}>
			{isLoading ? (
				<DotIndicator size={8} color="#000000" />
			) : (
				<Text allowFontScaling={false}>{children || 'Entrar'}</Text>
			)}
		</Button>
	)
}

export default ButtonLg
