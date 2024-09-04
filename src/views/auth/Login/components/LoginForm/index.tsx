import React from 'react' // Importando useState
import { Linking } from 'react-native'

import { ButtonLg, ButtonOutlinedLg } from 'components/core'
import { InputEmail } from 'components/forms'
import Images from 'src/adapters/constants/Images'
import { Form, Forms, ButtonGroup, Logo } from './styles'

type LoginFormProps = {
	isLoading: boolean
	email: string
	onChangeText: any
	handleLogin: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ email, onChangeText, isLoading, handleLogin }) => {
	return (
		<Form>
			<Logo source={Images.LOGO} />
			<Forms>
				<InputEmail value={email} onChangeText={onChangeText} />
			</Forms>
			<ButtonGroup>
				<ButtonLg isLoading={isLoading} onPress={handleLogin} />

				<ButtonOutlinedLg onPress={() => Linking.openURL('https://plataformahfit.com.br')}>
					Não tenho um acesso
				</ButtonOutlinedLg>
			</ButtonGroup>
		</Form>
	)
}

export default LoginForm
