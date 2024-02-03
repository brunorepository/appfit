import React, { ReactNode, useEffect, useRef } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ButtonLg } from 'components/core'
import { Images } from 'src/adapters/constants'
import {
	Container,
	Header,
	Logo,
	Title,
	Warning,
	Heading,
	TitleYellow,
	Footer,
	CreateAccount,
	CreateAccountYellow,
	TextRow,
	Touchable,
} from './styles'

type AuthTemplateProps = {
	children: ReactNode
	title: string
	titleYellow: string
	warning: string
	yellowButtonText: string
	onPressYellowButton: () => void
	onPressYellowText: () => void
	footerText: string
	footerYellowText: string
	isLoading?: boolean
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({
	children,
	title,
	titleYellow,
	warning,
	yellowButtonText,
	onPressYellowButton,
	onPressYellowText,
	footerText,
	footerYellowText,
	isLoading,
}) => {
	// Cria uma referência para o ScrollView
	const scrollViewRef = useRef<ScrollView>()

	useEffect(() => {
		scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
	}, [])

	// eslint-disable-next-line react/no-unstable-nested-components
	const Content = () => {
		return (
			<>
				<Header source={Images.HEADER_BACKGROUND} imageStyle={imageStyle}>
					<Logo source={Images.LOGO} />
				</Header>
				<Heading>
					<Title>
						{title} <TitleYellow>{titleYellow}</TitleYellow>
					</Title>
					<Warning>{warning}</Warning>
				</Heading>

				{children}
				<Footer>
					<ButtonLg onPress={onPressYellowButton}>{yellowButtonText}</ButtonLg>

					<TextRow>
						<CreateAccount>{footerText || 'Não tem uma conta?'}</CreateAccount>
						<Touchable activeOpacity={0.8} onPress={onPressYellowText}>
							<CreateAccountYellow>{footerYellowText || 'Cadastre-se'}</CreateAccountYellow>
						</Touchable>
					</TextRow>
				</Footer>
			</>
		)
	}

	return (
		<KeyboardAwareScrollView>
			<Container jc={isLoading ? 'center' : null}>
				{isLoading ? <ActivityIndicator size={60} color="#CCFF00" /> : <Content />}
			</Container>
		</KeyboardAwareScrollView>
	)
}

const imageStyle = {
	borderBottomRightRadius: 30,
}

export default AuthTemplate
