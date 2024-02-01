import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { InputEmail, InputPassword } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'

import {
	CreateAccount,
	CreateAccountYellow,
	Footer,
	ForgotPassword,
	Heading,
	InputContainer,
	TextRow,
	Title,
	TitleYellow,
	Warning,
} from './styles'

const LoginView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	return (
		<AuthTemplate>
			<Heading>
				<Title>
					Bem vindo(a) de volta ao <TitleYellow>Fit!</TitleYellow>
				</Title>
				<Warning>Preencha as informações abaixo para acessar sua conta</Warning>
			</Heading>
			<InputContainer>
				<InputEmail />
				<InputPassword />
				<ForgotPassword>Recuperar senha</ForgotPassword>
			</InputContainer>
			<Footer>
				<ButtonLg onPress={() => null} />

				<TextRow>
					<CreateAccount>Não tem uma conta?</CreateAccount>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => {
							navigation.navigate('PersonalInformations')
						}}
					>
						<CreateAccountYellow>Cadastre-se</CreateAccountYellow>
					</TouchableOpacity>
				</TextRow>
			</Footer>
		</AuthTemplate>
	)
}

export default LoginView
