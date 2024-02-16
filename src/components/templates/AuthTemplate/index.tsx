import React, { ReactNode } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { propsStack } from 'routes/models/stack-models'
import { ChevronLeftIcon } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { Header, HeaderTitle, HeaderInfo, LeftIconContainer, TextContainer } from './styles'

type AuthTemplateProps = {
	children: ReactNode
	title: string
	description: string
	showBack?: boolean
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ showBack, children, title, description }) => {
	const navigation = useNavigation<propsStack>()

	return (
		<KeyboardAwareScrollView
			style={{
				backgroundColor: '#1c1c1e',
			}}
		>
			<Header>
				{showBack && (
					<LeftIconContainer activeOpacity={0.8} onPress={() => navigation.goBack()}>
						<ChevronLeftIcon size="lg" />
					</LeftIconContainer>
				)}
				<TextContainer>
					<HeaderTitle allowFontScaling={false}>{title || 'Bem vindo(a) de volta!'}</HeaderTitle>
					<HeaderInfo allowFontScaling={false}>
						{description || 'Insira suas credenciais abaixo para acessar a plataforma'}
					</HeaderInfo>
				</TextContainer>
				<LeftIconContainer />
			</Header>
			{children}
		</KeyboardAwareScrollView>
	)
}

export default AuthTemplate
