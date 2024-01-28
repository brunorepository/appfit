import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonLg } from 'components/core'
import { InputUserEmail } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../../adapters/constants'

import {
	Container,
	CreateAccount,
	CreateAccountYellow,
	Footer,
	ForgotPassword,
	Header,
	InputContainer,
	Logo,
	TextRow,
	Title,
	TitleYellow,
} from './styles'

const LoginView: React.FC = () => {
	const navigation = useNavigation()

	return (
		<AuthTemplate>
			<Container>
				<Header source={Images.HEADER_BACKGROUND}>
					<Logo source={Images.LOGO} />
				</Header>
				<Title>
					Bem vindo(a) de volta ao <TitleYellow>HFit!</TitleYellow>
				</Title>
				<InputContainer>
					<InputUserEmail placeholder="Endereço de e-mail" />
					<InputUserEmail placeholder="Senha" />
					<ForgotPassword>Recuperar senha</ForgotPassword>
				</InputContainer>
				<Footer>
					<ButtonLg />

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
			</Container>
		</AuthTemplate>
	)
}

export default LoginView
