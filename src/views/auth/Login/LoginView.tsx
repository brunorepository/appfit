import React from 'react'
import axios from 'axios'
import { InputEmail, InputPassword } from 'components/forms'
import AuthTemplate from 'components/templates/AuthTemplate'
import { propsStack } from 'routes/models/stack-models'
import { useNavigation } from '@react-navigation/native'
import { ForgotPassword, InputContainer } from './styles'

const LoginView: React.FC = () => {
	const navigation = useNavigation<propsStack>()

	const onPressLogin = async () => {
		await axios
			.get('/posts')
			.then((response: { data: any }) => {
				return response.data
			})
			.catch((error: any) => {
				return error
			})
	}

	const onPressCreateAccount = () => {
		navigation.navigate('PersonalInformations')
	}

	return (
		<AuthTemplate
			title="Bem vindo(a) de volta ao"
			titleYellow="FitPersonal!"
			warning="Preencha os campos abaixo para acesar ua conta"
			onPressYellowButton={onPressLogin}
			onPressYellowText={onPressCreateAccount}
			yellowButtonText="Entrar"
			footerText=""
			footerYellowText=""
		>
			<InputContainer>
				<InputEmail value="" onChangeText={undefined} />
				<InputPassword />
				<ForgotPassword>Recuperar senha</ForgotPassword>
			</InputContainer>
		</AuthTemplate>
	)
}

export default LoginView
